# IPA audio Lambda: what the code does + step-by-step setup

This is a **single ordered path** through the same pieces as [aws-audio-setup-from-scratch.md](./aws-audio-setup-from-scratch.md), with your bucket and region called out where it helps.

## What you are building (big picture)

1. The **website** tries to play MP3s for IPA strings it knows (`audio-resolve.js`).
2. It looks in order: **same-origin `/audio/`** on GitHub Pages → **public S3 URLs** (`s3AudioBase`) → **POST to Lambda** (`generateUrl`) which uses **Polly** to synthesize, **uploads MP3 to S3**, returns the file URL.
3. Lambda only synthesizes **allowlisted** IPA (from `allowlist.json` inside the deployed zip), so random text cannot burn your Polly budget.

## Where the function code lives

The Lambda implementation is **in this repo**, not typed in the AWS console:

- **Handler file:** `[website/lambda/ipa-synthesize/index.mjs](../lambda/ipa-synthesize/index.mjs)`

It exports `**handler`**. Rough flow:

- **OPTIONS** → CORS preflight (204).
- **POST** `{ "phon": "…", "voice": "Zeina" }` → load `allowlist.json` → if `phon` is not in the map → **403** `not_allowlisted`.
- **S3:** Build key `audio/{key}.mp3`. **HeadObject** (cache check): if object exists → **200** `{ url, cached: true }`.
- Else **Polly** SSML `<phoneme alphabet="ipa" …>` → **PutObject** MP3 → **200** `{ url, cached: false }`.

Environment variables it expects:


| Variable            | Required | Meaning                                                                    |
| ------------------- | -------- | -------------------------------------------------------------------------- |
| `S3_AUDIO_BUCKET`   | Yes      | Bucket **name** only, e.g. `annaishq-zulapa-audio`                         |
| `ALLOWLIST_PATH`    | No       | Override path to allowlist (default: `allowlist.json` next to `index.mjs`) |
| `CORS_ALLOW_ORIGIN` | No       | Use `*` or **omit** so the handler echoes the request `Origin` (works for **`https://zulapa.com`** and **`http://localhost:8080`**). A single production URL only would block local dev. |


Lambda automatically gets `**AWS_REGION`** from the function’s region; the code uses it for Polly, S3, and public URLs.

**IAM:** In the policy JSON use `**s3:GetObject`** (not `s3:HeadObject`); AWS maps Head API calls to **GetObject** for permission checks.

---

## Prerequisites

- AWS account, admin access in the console.
- One **S3 bucket** for audio (you have `**annaishq-zulapa-audio`** in `**eu-central-2**`).
- Bucket allows **public read** on `audio/*` and **CORS** allows **GET** and **HEAD** from `https://zulapa.com` (and `https://www.zulapa.com` if you use it), plus **`http://localhost:8080`** if you test the site locally. See the scratch doc Phase B if not done yet.
- This repo on your machine with **Node.js** for building the zip.

---

## Step 1 — IAM role for Lambda

1. **IAM** → **Roles** → **Create role**.
2. **Trusted entity:** AWS service → **Lambda** → **Next**.
3. On the permissions list, attach only `**AWSLambdaBasicExecutionRole`** (or `**AWSLambdaExecute**`) so you can finish the wizard, **Next**.
4. Name the role (e.g. `**polly-gen`**) → **Create role**.
5. Open the role → **Permissions** → **Add permissions** → **Create inline policy** → **JSON** tab.

Paste (replace nothing if you use this bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PollySynthesize",
      "Effect": "Allow",
      "Action": "polly:SynthesizeSpeech",
      "Resource": "*"
    },
    {
      "Sid": "S3AudioObjects",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::annaishq-zulapa-audio/audio/*"
    }
  ]
}
```

If you already have `**AWSLambdaBasicExecutionRole**` (or `**AWSLambdaExecute**`) attached, **do not** duplicate the CloudWatch `logs:*` lines here.

1. Save the inline policy (any name, e.g. `**zulapa-polly-gen`**).
2. Optional: remove any temporary `**AmazonS3FullAccess**` / `**AmazonPollyFullAccess**` if you attached them earlier.

---

## Step 2 — Regenerate allowlist and build `function.zip`

From your **repository root**:

1. Ensure `**website/db.json`** is current (copy from `src` / CI as you usually do).
2. Generate allowlist:

```bash
cd website
node scripts/generate-allowlist.mjs
```

This writes `**website/audio-allowlist.json**`.

1. Copy it into the Lambda folder and install dependencies + zip:

```bash
cp audio-allowlist.json lambda/ipa-synthesize/allowlist.json

cd lambda/ipa-synthesize
npm ci
zip -r function.zip index.mjs allowlist.json node_modules
```

You should have `**function.zip**` in `**website/lambda/ipa-synthesize/**`.

---

## Step 3 — Create the Lambda function

1. **Lambda** → **Create function**.
2. **Author from scratch**, name e.g. `**ipa-synthesize`**.
3. **Runtime:** Node.js **20.x** (or newer supported).
4. **Architecture:** arm64 or x86 (either is fine).
5. **Change default execution role** → **Use an existing role** → pick `**polly-gen`** (your role from Step 1).
6. **Create function**.

Region: choose `**eu-central-2`** (same as the bucket) in the **top-right** region selector before or when creating the function.

---

## Step 4 — Upload code and set handler

1. On the function page → **Code** → **Upload from** → **.zip file** → upload `**function.zip`**.
2. **Runtime settings** → **Edit**:
  - **Handler** for Node ESM must be `**index.handler`** (file `index.mjs`, exported name `handler`).

---

## Step 5 — Environment variables

**Configuration** → **Environment variables** → **Edit**:

- `**S3_AUDIO_BUCKET**` = `annaishq-zulapa-audio`
- `**CORS_ALLOW_ORIGIN**` = `*` **or leave unset** (recommended so `Access-Control-Allow-Origin` matches each caller: production **or** `http://localhost:8080`). Do not set only `https://zulapa.com` if you still want to call the Function URL from localhost.

Save.

---

## Step 6 — Function URL + CORS

1. **Configuration** → **Function URL** → **Create**.
2. **Auth type:** **NONE** (simplest for a public site calling with `fetch`; tighten later if needed).
3. **Configure cross-origin resource sharing (CORS):**
   - Allow **POST** and **OPTIONS**.
   - **Allowed origins:** `https://zulapa.com`, `https://www.zulapa.com` (if you use www), and **`http://localhost:8080`** for local dev.
   - Allow header `content-type`.
4. Copy the **Function URL** (starts with `https://`).

The handler’s `CORS_ALLOW_ORIGIN` (Step 5) should stay `*` or unset so `Access-Control-Allow-Origin` can echo **`http://localhost:8080`** when you develop locally; the Function URL CORS allowlist must include that origin too.

---

## Step 7 — Wire the website

Edit `**website/index.html**`: set `**window.__ZULAPA_AUDIO__**`:

- `**generateUrl**` — paste the Function URL (no trailing slash required for typical setups).
- `**s3AudioBase**` — you already use something like  
`https://annaishq-zulapa-audio.s3.eu-central-2.amazonaws.com/audio/`  
(must end with `**/**` before the script appends `key + ".mp3"`).
- `**voice**` — must match the voice in `**audio-allowlist.json**` (default pipeline uses `**Zeina**` unless you set `**ZULAPA_VOICE_ID**` when running `generate-allowlist.mjs`).

Redeploy the site (push / Actions) so `**index.html**` and `**audio-allowlist.json**` on Pages match what Lambda has in `**allowlist.json**`.

---

## Step 8 — Smoke tests

**curl** (replace URL and `phon` with a string that exists in your allowlist):

```bash
curl -sS -X POST 'https://YOUR-FUNCTION-URL.lambda-url.eu-central-2.on.aws/' \
  -H 'Content-Type: application/json' \
  -d '{"phon":"/YOUR/EXACT/PHON/","voice":"Zeina"}'
```

Expect JSON like `{"url":"https://annaishq-zulapa-audio.s3.eu-central-2.amazonaws.com/audio/....mp3","cached":true}` or `cached:false` on first generation.

Then open **[https://zulapa.com](https://zulapa.com)** (or your local build at **`http://localhost:8080`** with S3 + Lambda CORS updated as above), DevTools → **Network**, trigger audio for an allowlisted entry, and confirm **POST** to the Function URL and/or MP3 load from S3 succeeds.

---

## When you change the lexicon

1. `npm run makedb` / sync `**website/db.json`** as you do today.
2. `cd website && node scripts/generate-allowlist.mjs`
3. Commit `**website/audio-allowlist.json**`, redeploy Pages.
4. Copy new `**allowlist.json**` into `**lambda/ipa-synthesize/**`, rebuild `**function.zip**`, **upload** to Lambda again.

---

## Quick reference: files


| File                                                                    | Role                                                  |
| ----------------------------------------------------------------------- | ----------------------------------------------------- |
| `[lambda/ipa-synthesize/index.mjs](../lambda/ipa-synthesize/index.mjs)` | Lambda handler source                                 |
| `[lambda/ipa-synthesize/README.md](../lambda/ipa-synthesize/README.md)` | Short bundle/deploy notes                             |
| `[website/audio-allowlist.json](../audio-allowlist.json)`               | Client + must be copied to Lambda as `allowlist.json` |
| `[website/audio-resolve.js](../audio-resolve.js)`                       | Browser: tiered resolve                               |
| `[website/index.html](../index.html)`                                   | `__ZULAPA_AUDIO__` config                             |


If anything errors, the **Monitor** → **Logs** for the Lambda function usually shows the exact missing permission or wrong region.