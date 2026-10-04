# AWS + tiered IPA audio: setup from scratch

This guide assumes the static site already deploys from GitHub Actions (see [Deploy GitHub Pages workflow](../../.github/workflows/deploy.yml)). It walks through **opening AWS**, wiring **S3**, **Lambda + Polly**, **GitHub secrets** (optional), and **production config** so inline IPA can play from your bucket and/or Lambda.

**Production URL:** the public site is **https://zulapa.com**, served by **GitHub Pages** behind a **custom domain** (registrar **CNAME** toward GitHub’s Pages targets, plus the domain set under the repo **Settings → Pages**). Use **`https://zulapa.com`** as the **exact origin** in S3 and Lambda CORS rules. If you also use **`https://www.zulapa.com`**, include that origin as well. Enable **Enforce HTTPS** in Pages when GitHub offers it.

Do **not** put secret keys or URLs with embedded credentials into git. Use GitHub encrypted secrets and your live `index.html` config only where appropriate.

References: [audio-pipeline.md](./audio-pipeline.md), [**step-by-step walkthrough**](./lambda-ipa-audio-walkthrough.md) (Lambda code + ordered checklist), [`lambda/ipa-synthesize/README.md`](../lambda/ipa-synthesize/README.md), [`PROMPT_REMAINING_WORK.md`](../PROMPT_REMAINING_WORK.md).

---

## Phase A: AWS account

1. **Create an AWS account**
   - Go to [AWS](https://aws.amazon.com/), choose **Create an AWS Account**.
   - Complete signup: email, password, contact info, payment method (free tier applies to many services; you may still incur small charges; set **billing alarms** later in Billing console).
   - Finish **identity verification** (phone/SMS).

2. **Sign in as root** once, then **create an admin IAM user for day-to-day work** (recommended; avoid using root for CLI and automation).
   - Open **IAM** → **Users** → **Create user**.
   - Enable **AWS Management Console access** (and programmatic access only if you will use Access Keys).
   - Attach policy **AdministratorAccess** for simplicity while learning, or narrower policies later once everything works.
   - Store the console sign-in URL, username, and password securely.

3. **Enable MFA** on the root user and on your admin IAM user (IAM → user → Security credentials → MFA).

4. **Choose a default region** (e.g. `us-east-1` or another where Polly and Lambda are available for your workflows). Stick to **one region** for S3 bucket, Lambda, and Polly to avoid surprises.

---

## Phase B: S3 bucket for MP3 objects

Goal: bucket holds objects at **`audio/{key}.mp3`** matching [audio-pipeline.md](./audio-pipeline.md). The browser loads the app from **https://zulapa.com** and fetches audio via same-origin **`/audio/`**, direct S3 URLs, or Lambda—so the bucket **CORS** configuration must allow the **zulapa.com** origin.

1. **Create bucket**
   - **S3** → **Create bucket**.
   - **Bucket name**: globally unique (e.g. `yourname-zulapa-audio`).
   - **Region**: same as Phase A.
   - **Block Public Access**: for a simple public-audio setup you will **turn off** block for this bucket (or use only a bucket policy that allows public read on `audio/*`). Many tutorials use “uncheck block all public access” and confirm; alternatively keep blocks on and use CloudFront (more setup; skip for first pass).

2. **Bucket policy (public read for `audio/*`)**
   - Bucket → **Permissions** → **Bucket policy**.
   - Add a policy that allows `s3:GetObject` for `Principal: "*"` on `arn:aws:s3:::BUCKETNAME/audio/*` (replace bucket name).
   - Save; fix any conflict with Block Public Access settings until policy applies.

3. **CORS on the bucket**
   - Bucket → **Permissions** → **Cross-origin resource sharing (CORS)**.
   - Add a rule that allows:
     - **AllowedOrigins**: **`https://zulapa.com`** (must match how users open the site; add **`https://www.zulapa.com`** if you use www). Optionally add **`http://localhost:8080`** (or your local dev origin) for testing only.
     - **AllowedMethods**: `GET`, `HEAD`.
     - **AllowedHeaders**: `*` or minimal set (`Range`, etc., if needed).

4. **Note the public object URL base**
   - Virtual-hosted-style example:  
     `https://BUCKETNAME.s3.REGION.amazonaws.com/audio/`  
   - You will set this as **`s3AudioBase`** in [index.html](../index.html) (`window.__ZULAPA_AUDIO__`). Trailing slash should match how [audio-resolve.js](../audio-resolve.js) joins paths (see PROMPT).

---

## Phase C: IAM for Lambda (Polly + S3)

Later you attach a role to Lambda. Prepare permissions now (or paste inline when creating the function).

Lambda needs roughly:

- `polly:SynthesizeSpeech`
- `s3:PutObject`, `s3:GetObject`, `s3:HeadObject` on `arn:aws:s3:::BUCKETNAME/audio/*` (and optionally `ListBucket` on the bucket prefix if your code lists; follow README in `lambda/ipa-synthesize/`).

**Create IAM role**:

1. **IAM** → **Roles** → **Create role**.
2. **Trusted entity**: **AWS service** → **Lambda**.
3. Attach policies: start with **custom policy** containing the minimal statements above for your bucket ARN, plus **AWSLambdaBasicExecutionRole** (CloudWatch Logs) so the function can log.

---

## Phase D: Deploy Lambda (Polly synthesize + cache to S3)

Code lives in [website/lambda/ipa-synthesize/](../lambda/ipa-synthesize/).

1. **Fresh allowlist inside the Lambda package**
   - On your machine from repo root: ensure `website/db.json` matches `src/db.json` after `npm run makedb` (or rely on CI which copies before allowlist generation).
   - From `website/` run:  
     `node scripts/generate-allowlist.mjs`
   - Copy **`website/audio-allowlist.json`** to **`website/lambda/ipa-synthesize/allowlist.json`** before zipping (see Lambda README).

2. **Create the function**
   - **Lambda** → **Create function**.
   - **Runtime**: Node.js **20.x** or newer (README requires 20+).
   - **Architecture**: arm64 or x86_64 (either is fine if dependencies match).
   - **Upload** zip of the lambda folder contents (handler file as README specifies: typically `index.mjs`).
   - **Environment variables**: **`S3_AUDIO_BUCKET`** = your bucket **name only** (not ARN).

3. **Attach the IAM role** from Phase C.

4. **Function URL**
   - Lambda → **Configuration** → **Function URL** → **Create**.
   - **Auth**: **NONE** only if you accept public invocation; alternatively use IAM auth and a different client flow (advanced). For browsers calling from **https://zulapa.com**, HTTPS Function URL + CORS is common.
   - Note the **HTTPS URL**; this becomes **`generateUrl`** in [index.html](../index.html).

5. **CORS on Function URL**
   - Allow **POST** and **OPTIONS** from **`https://zulapa.com`** (and **`https://www.zulapa.com`** if applicable). For local static serving (e.g. this site on **`http://localhost:8080`**), add that origin too so `fetch` from the browser is allowed.
   - Allow needed headers (e.g. `content-type`).
   - Test with `curl`:
     - `OPTIONS` to the URL with `-i`
     - `POST` JSON body `{ "phon": "<exact phon from db.json>", "voice": "Zeina" }` and expect `{ "url", "cached" }` (shape per implementation).

6. **Polly voice**
   - Default narrative often uses **`Zeina`**. **`voice`** in the client **must match** **`ZULAPA_VOICE_ID`** when you ran `generate-allowlist.mjs`.
   - If Neural engine fails for that voice/region, adjust per README and regenerate allowlist if voice id changes.

---

## Phase E: Configure the website (production)

Edit [website/index.html](../index.html): set **`window.__ZULAPA_AUDIO__`** (see [PROMPT_REMAINING_WORK.md](../PROMPT_REMAINING_WORK.md) section “Client config”).

Typical meanings:

| Key | Purpose |
|-----|----------|
| `ghAudioBase` | Usually empty string so resolution tries same-origin **`/audio/`** on **https://zulapa.com** first. |
| `s3AudioBase` | Public base URL ending in **`audio/`** (your S3 public prefix). |
| `generateUrl` | Lambda Function URL from Phase D. |
| `voice` | Polly voice id used for allowlist (e.g. `Zeina`). |

Commit **`website/index.html`** (and regenerated **`website/audio-allowlist.json`** when lexicon changed), push **`master`** so Actions deploys.

---

## Phase F: GitHub Actions optional sync (fills `website/audio/` in the artifact)

If you want CI to **`aws s3 sync`** bucket MP3s into `./audio/` under `website/` before upload (so same-origin **`/audio/`** has files):

1. In the GitHub repo: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
2. Add **`AWS_ACCESS_KEY_ID`**, **`AWS_SECRET_ACCESS_KEY`**, **`AWS_REGION`**, **`S3_AUDIO_BUCKET`** (bucket name).

**Prefer long term**: replace static keys with **OIDC federation** (`aws-actions/configure-aws-credentials`) and IAM role trust to GitHub; that is optional first pass after keys work.

3. Confirm [.github/workflows/deploy.yml](../../.github/workflows/deploy.yml) runs green; download or inspect artifact if needed.

If you skip secrets, Pages still ships; **`/audio/`** stays empty unless you upload MP3s by other means—but **S3** + **Lambda** paths can still work.

---

## Phase G: End-to-end checks

1. Open **https://zulapa.com** (**not only localhost**) and load an entry whose IPA is **allowlisted**.
2. In browser DevTools → **Network**: verify attempts to **`/audio/...mp3`** and/or **`s3.../audio/...`** and/or **POST** to Function URL succeed.
3. Unlisted IPA should still fall back sensibly ([audio-resolve.js](../audio-resolve.js) behavior).

---

## Ongoing ops (when pronunciation or lexicon changes)

1. `npm run makedb`
2. `npm run sync-website-db` (or let CI copy `src/db.json` → `website/db.json`)
3. `cd website && node scripts/generate-allowlist.mjs`
4. Commit **`website/audio-allowlist.json`**, deploy site
5. Copy new allowlist into **Lambda bundle** (`allowlist.json`) and **redeploy Lambda**

---

## Cost and safety reminders

- Set **billing alerts** under **Billing** → **Budgets**.
- Rotate or delete IAM access keys when moving to OIDC.
- Restrict bucket policy if you later use CloudFront or signed URLs.
- Lambda public Function URL exposes synthesis to the internet; misuse can cost money; optional throttling/API keys/WAF later.
