# Tiered IPA audio pipeline

## Canonical string

Use the exact `phon` value from `db.json` (`word.*.phon`, `alt.*.phon`), including slashes (e.g. `/xɔskal/`). This string is the key for allowlisting and must match between the client, S3 object names, and Lambda.

## Cache key (filename stem)

Same on client, build scripts, and Lambda:

```
sha256Text = SHA-256( voiceId + "\0" + phonExact )
key = base64url( sha256Text )
```

- **base64url**: standard Base64 with `+` → `-`, `/` → `_`, padding `=` removed.
- **voiceId**: AWS Polly voice id, e.g. `Zeina`.

Object path: `audio/{key}.mp3` on S3 and the same path on GitHub Pages: `/audio/{key}.mp3`.

## Polly SSML

`phoneme` `ph` may not include slashes. Strip **only** leading/trailing `/` for the `ph` attribute; keep the canonical string everywhere else.

## Client resolution order

1. Same-origin `HEAD` or `GET` → `/audio/{key}.mp3`
2. Public S3 URL → `HEAD`/`GET`
3. `POST` to Lambda generate endpoint with `{ phon, voice }` → play returned URL or new S3 URL

## Files

- [`scripts/audio-key.mjs`](../scripts/audio-key.mjs) — key derivation (Node).
- [`audio-allowlist.json`](../audio-allowlist.json) — generated `phonToKey` map (run `node scripts/generate-allowlist.mjs`).
- [`audio-resolve.js`](../audio-resolve.js) — browser: GitHub Pages URL, then S3, then `POST` generate URL.
- [`lambda/ipa-synthesize/`](../lambda/ipa-synthesize/) — AWS Lambda (Polly + S3).
- [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) — optional `aws s3 sync` into `./audio/` before Pages deploy (no repo commit).
