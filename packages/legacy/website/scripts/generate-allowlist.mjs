#!/usr/bin/env node
/**
 * Reads db.json, collects distinct `phon` from word + alt, writes audio-allowlist.json for client + Lambda.
 */

import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { audioCacheKey } from "./audio-key.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dbPath = join(root, "db.json");
const outPath = join(root, "audio-allowlist.json");

const DEFAULT_VOICE = "Zeina";

function collectPhons(db) {
  const set = new Set();
  const fromEntry = (o) => {
    const p = o && o.phon;
    if (p != null && String(p).length > 0) set.add(String(p));
  };
  for (const id of Object.keys(db.word || {})) fromEntry(db.word[id]);
  for (const id of Object.keys(db.alt || {})) fromEntry(db.alt[id]);
  return [...set].sort();
}

const db = JSON.parse(readFileSync(dbPath, "utf8"));
const voice = process.env.ZULAPA_VOICE_ID || DEFAULT_VOICE;
const phons = collectPhons(db);
const phonToKey = {};
for (const phon of phons) {
  phonToKey[phon] = audioCacheKey(voice, phon);
}

const payload = {
  voice,
  phonToKey,
};

writeFileSync(outPath, JSON.stringify(payload, null, 0) + "\n", "utf8");
console.log("Wrote", outPath, "phons:", phons.length);
