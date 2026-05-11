# ipa-synthesize Lambda

Function URL handler: **OPTIONS** (CORS), **POST** JSON `{ "phon": "<exact from db.json>", "voice": "Zeina" }` (voice optional; must match `audio-allowlist.json`).

## Bundle before deploy

1. From repo root: `cp audio-allowlist.json lambda/ipa-synthesize/allowlist.json`
2. `cd lambda/ipa-synthesize && npm ci && zip -r function.zip index.mjs allowlist.json node_modules`

## Environment

| Variable            | Description                          |
| ------------------- | ------------------------------------ |
| `S3_AUDIO_BUCKET`   | Bucket name (objects under `audio/`) |
| `ALLOWLIST_PATH`    | Optional absolute path to allowlist  |
| `CORS_ALLOW_ORIGIN` | Default `*`                          |

Use execution role with `polly:SynthesizeSpeech`, `s3:PutObject`, `s3:GetObject`, `s3:HeadObject` on the bucket ARN.

Enable **Function URL** (HTTP API) with CORS if not handled in code.

## IAM (sketch)

Attach to Lambda role: `AmazonPollyReadOnlyAccess` or a custom policy with `polly:SynthesizeSpeech`; S3 write on `arn:aws:s3:::BUCKET/audio/*`.
