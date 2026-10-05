/**
 * Shared IPA audio cache key (Node). Same algorithm must be used in Lambda and the browser
 * (see audio-allowlist.json phonToKey from generate-allowlist.mjs).
 */
import { createHash } from "crypto";

export function audioCacheKey(voiceId, phonExact) {
  const h = createHash("sha256").update(String(voiceId) + "\0" + String(phonExact)).digest();
  return base64url(h);
}

export function base64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

/** For Polly SSML phoneme ph= — strip outer slashes only. */
export function pollyPhFromCanonicalPhon(phonExact) {
  const s = String(phonExact || "");
  return s.replace(/^\/+|\/+$/g, "");
}
