# Prompt: what is left to do (Zulapa / zu2 tiered IPA + repo integration)

Use this as a handoff for you or another agent. Replace paths with your clone locations if they differ.

## Goal

Finish **operational wiring** for the tiered IPA audio pipeline (GitHub Pages → optional same-origin `audio/` → S3 → Lambda + Polly) and, if applicable, **integrate this codebase into the parent `zulapa` repo under a `zu2/` folder** without losing history.

---

## 1. GitHub Pages + deploy workflow

- **Repository setting:** enable **GitHub Pages** from **GitHub Actions** (not “Deploy from branch” only), unless you intentionally use another host.
- **Secrets (optional S3 sync in CI):** set **`AWS_ACCESS_KEY_ID`**, **`AWS_SECRET_ACCESS_KEY`**, **`AWS_REGION`**, **`S3_AUDIO_BUCKET`** so `.github/workflows/deploy.yml` can run `aws s3 sync s3://$S3_AUDIO_BUCKET/audio/ ./audio/` before `upload-pages-artifact`. If secrets are absent, the workflow should still deploy the static site without MP3s.
- **First run:** confirm the workflow completes; open the published site and verify `audio-allowlist.json` and app shell load (network tab).
- **Optional upgrade:** switch long-lived keys to **OIDC + IAM role** (`aws-actions/configure-aws-credentials`, `id-token: write`) per org policy.

---

## 2. Client config (production URLs)

In **`index.html`** (or a small `config.js` you inject in CI), fill **`window.__ZULAPA_AUDIO__`**:

- **`ghAudioBase`** — usually leave default empty so same-origin `/audio/` is used; or set explicitly if the app is not at repo root.
- **`s3AudioBase`** — public object URL prefix for `audio/{key}.mp3` (e.g. `https://BUCKET.s3.REGION.amazonaws.com/audio/` — trailing slash semantics must match what `audio-resolve.js` expects: it joins `base + key + ".mp3"`).
- **`generateUrl`** — **Lambda Function URL** (HTTPS POST JSON `{ phon, voice }`).
- **`voice`** — must match the voice used when generating **`audio-allowlist.json`** (see `scripts/generate-allowlist.mjs` / env `ZULAPA_VOICE_ID`); default in stack was **`Zeina`**.

Until `s3AudioBase` and/or `generateUrl` are set, inline `/…/` IPA will still try Pages first, then fall back to **IPA Reader** in the browser.

---

## 3. AWS: S3 + CORS + public read

- **Bucket policy / Block Public Access:** allow **public read** for `audio/*` (or front with CloudFront + OAI later).
- **CORS:** allow your **GitHub Pages origin** (and `localhost` for dev if needed) for **`GET`** and **`HEAD`** on objects used by the browser.
- **Layout:** objects at **`audio/{key}.mp3`** where `key` is the allowlist hash stem (same as `audio-allowlist.json` `phonToKey` values).

---

## 4. AWS: Lambda (ipa-synthesize)

- **Bundle:** copy repo-root **`audio-allowlist.json`** to **`lambda/ipa-synthesize/allowlist.json`** before zipping (see `lambda/ipa-synthesize/README.md`).
- **Deploy:** Node.js 20+ runtime, **`index.mjs`** handler; attach IAM: **`polly:SynthesizeSpeech`**, **`s3:PutObject`**, **`s3:GetObject`**, **`s3:HeadObject`** on the audio bucket prefix.
- **Environment:** **`S3_AUDIO_BUCKET`** (name only); region from Lambda default **`AWS_REGION`**.
- **Function URL:** enable HTTPS; CORS must allow your Pages origin for **POST** + preflight.
- **Smoke test:** `curl` **OPTIONS** and **POST** `{"phon":"<exact db.json phon>","voice":"Zeina"}`; expect JSON **`{ url, cached }`**.
- **Polly:** if **`Engine: neural`** fails for the chosen voice/region, fall back to default engine or another voice (document any change and regenerate allowlist if voice id changes).

---

## 5. Allowlist regeneration

Whenever **`db.json`** changes, run:

```bash
node scripts/generate-allowlist.mjs
```

Commit updated **`audio-allowlist.json`**, redeploy the site, and **re-copy allowlist into the Lambda package** and redeploy Lambda so client and server stay aligned.

---

## 6. Optional: local MP3 mirror / versioned `audio/` in git

- Use **`scripts/sync-audio-local.sh`** (with `S3_AUDIO_BUCKET` and `AWS_REGION` / `AWS_DEFAULT_REGION`) to fill **`./audio/`**.
- Optionally **`git add audio/`** for offline clones; CI does **not** auto-commit MP3s.

---

## 7. Documentation gaps

- Ensure **`docs/audio-pipeline.md`** exists in the repo (canonical `phon`, key derivation, URLs, env vars, bucket sketch). If missing, restore from design or recreate from `scripts/audio-key.mjs` + Lambda README.
- Add a short **“Deployment checklist”** in the README or `docs/` linking secrets, S3 CORS, and Lambda URL (keep **no secrets** in the doc).

---

## 8. Integrating into parent project `zulapa` under `zu2/`

If the canonical app should live inside **`/Users/anna/git/zulapa`** with this tree under **`zu2/`**:

1. **Rewrite or subtree** so all files from this project sit under **`zu2/`** (see git **`git filter-repo --to-subdirectory-filter zu2`** on a clone, or **`git subtree add --prefix=zu2`** from `zulapa`).
2. Merge or cherry-pick the rewritten history onto **`zulapa`**’s **`master`** (or default branch).
3. Update **GitHub Pages** and **Actions** paths if the published root moves (asset URLs, `upload-pages-artifact` path).
4. Resolve **duplicate names** (`package.json`, workflows) if both repos had CI at repo root.

---

## 8. Nice-to-haves (not blocking)

- **`?tiny=1`** loads **`db-tiny.json`**; ensure **`audio-allowlist.json`** is still valid or generate a tiny allowlist variant for dev.
- **CloudFront** in front of S3 for caching and a stable domain.
- **Error UX** when generation fails (toast vs silent fallback to IPA Reader).

---

## Done when

- Pages loads; allowlisted inline IPA **plays** from Pages or S3 or after one **POST** to Lambda; unlisted `/…/` still opens **IPA Reader**.
- CI deploy works **with or without** AWS secrets.
- Lambda + bucket + CORS are verified from the real Pages origin.
