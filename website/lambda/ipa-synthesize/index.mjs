/**
 * Lambda Function URL: POST { phon, voice } → Polly SSML → S3 PutObject → { url }.
 * Bundle allowlist.json (copy from repo root audio-allowlist.json before zipping).
 */

import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function pollyPhFromCanonicalPhon(phonExact) {
  return String(phonExact || "").replace(/^\/+|\/+$/g, "");
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

let cachedAllowlist;

function loadAllowlist() {
  if (cachedAllowlist) return cachedAllowlist;
  const path =
    process.env.ALLOWLIST_PATH || join(__dirname, "allowlist.json");
  if (!existsSync(path)) {
    throw new Error("Missing allowlist.json; copy audio-allowlist.json from repo before deploy.");
  }
  const raw = readFileSync(path, "utf8");
  cachedAllowlist = JSON.parse(raw);
  return cachedAllowlist;
}

function corsHeaders(origin) {
  const allow = process.env.CORS_ALLOW_ORIGIN || "*";
  return {
    "Access-Control-Allow-Origin": allow === "*" && origin ? origin : allow,
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Headers": "content-type",
    "Content-Type": "application/json",
  };
}

function publicObjectUrl(bucket, region, key) {
  const enc = encodeURIComponent(key).replace(/%2F/g, "/");
  return `https://${bucket}.s3.${region}.amazonaws.com/${enc}`;
}

async function pollyStreamToBuffer(stream) {
  if (!stream) return Buffer.alloc(0);
  if (typeof stream.transformToByteArray === "function") {
    return Buffer.from(await stream.transformToByteArray());
  }
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

function parseHttpBody(event) {
  let raw = event.body;
  if (raw == null) return {};
  if (event.isBase64Encoded && typeof raw === "string") {
    raw = Buffer.from(raw, "base64").toString("utf8");
  }
  return JSON.parse(raw || "{}");
}

export async function handler(event) {
  const origin = event.headers?.origin || event.headers?.Origin || "";
  const headers = corsHeaders(origin);

  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers };
  }

  let body;
  try {
    body = parseHttpBody(event);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "invalid_json" }) };
  }

  const phon = body.phon;

  if (phon == null || phon === "") {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "missing_phon" }) };
  }

  const phonStr = String(phon);
  const list = loadAllowlist();
  const keyFromList = list.phonToKey[phonStr];
  if (keyFromList == null) {
    return { statusCode: 403, headers, body: JSON.stringify({ error: "not_allowlisted" }) };
  }

  if (body.voice != null && String(body.voice) !== list.voice) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "voice_mismatch", expected: list.voice }),
    };
  }

  const voiceId = list.voice;
  const bucket = process.env.S3_AUDIO_BUCKET;
  const region = process.env.AWS_REGION || "us-east-1";
  if (!bucket) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "missing_bucket" }) };
  }

  const objectKey = `audio/${keyFromList}.mp3`;
  const s3 = new S3Client({ region });

  try {
    await s3.send(
      new HeadObjectCommand({
        Bucket: bucket,
        Key: objectKey,
      })
    );
    const url = publicObjectUrl(bucket, region, objectKey);
    return { statusCode: 200, headers, body: JSON.stringify({ url, cached: true }) };
  } catch (e) {
    const code = e?.$metadata?.httpStatusCode;
    const name = e?.name || "";
    if (code !== 404 && name !== "NotFound" && !String(name).includes("NoSuchKey")) {
      throw e;
    }
  }

  const pollyPh = pollyPhFromCanonicalPhon(phonStr);
  if (!pollyPh) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "empty_ph_after_strip" }) };
  }

  const ssml = `<speak><phoneme alphabet="ipa" ph="${escapeXml(pollyPh)}">.</phoneme></speak>`;
  const polly = new PollyClient({ region });
  const syn = await polly.send(
    new SynthesizeSpeechCommand({
      Text: ssml,
      TextType: "ssml",
      OutputFormat: "mp3",
      VoiceId: voiceId,
      Engine: "neural",
    })
  );

  const buf = await pollyStreamToBuffer(syn.AudioStream);
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: buf,
      ContentType: "audio/mpeg",
      CacheControl: "public, max-age=31536000",
    })
  );

  const url = publicObjectUrl(bucket, region, objectKey);
  return { statusCode: 200, headers, body: JSON.stringify({ url, cached: false }) };
}
