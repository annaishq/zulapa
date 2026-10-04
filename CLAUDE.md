# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical rule

**Do not commit in this repository** (see AGENTS.md). Never run `git commit` or create commits via automation. Leave changes unstaged so the author reviews and commits themselves.

## What this is

Zulapa is a constructed language (conlang) by Anna Ishq. The language is *authored as TypeScript code* in `src/`, compiled into a lexicon database (`src/db.json`), and browsed via a static React website in `website/`. Code is MIT; the language itself is private.

## Commands

```bash
npm run makedb            # Compile the language sources → src/db.json + llms/*.md
npm run makedb:watch      # Same, re-running on changes (requires fswatch)
npm run sync-website-db   # cp src/db.json website/db.json (website reads its own copy)

npm test                  # Jest, all tests (100% coverage threshold enforced)
npm run test:watch        # Watch mode, coverage disabled

# Single test file (disable coverage or the 100% global threshold fails):
npx jest -c setup/jest.js --coverage false src/contest/words/prefix/verb.test.ts

npm run roots             # CLI utilities over the lexicon
npm run find
npm run stats
```

The website has no build step — serve `website/` statically (e.g. `python3 -m http.server` from `website/`). React + Babel standalone are loaded from a CDN and `.jsx` files are transpiled in the browser. Append `?tiny=1` to load the small `db-tiny.json` instead of the full lexicon.

## Architecture

### Language compilation pipeline (`src/`)

- **`src/conlib/`** — the generic conlang engine: entry types (`types.ts`), morpheme joining (`joinMorphemes.ts`), prefix/suffix machinery, phonology/orthography (`writing.ts`), and compilation (`compile.ts`, which turns the in-memory entry graph into the JSON db and also exports markdown summaries to `llms/`).
- **`src/conlang/`** — the Zulapa language content itself: roots (`roots/`), vocabulary grouped by topic (`concepts/`), prefixes/suffixes, conjugation, poems, songs. Everything is re-exported through `lang.ts`; entries register themselves on import (imports have side effects — "force compilation" imports are intentional).
- **`src/conlang/index.ts`** is the `makedb` entry point: compiles all entries, writes `src/db.json`, and exports LLM-readable markdown to `llms/`.
- A husky pre-commit hook runs `makedb` and stages `src/db.json`, so the db is kept in sync with the sources in commits.

### Tests (`src/contest/`)

Tests live in `src/contest/` (not next to sources) and use a custom assertion DSL defined in `src/test.ts`, imported via the `test` module alias (mapped in both `tsconfig.json` paths and `setup/jest.js` moduleNameMapper — keep these in sync). Coverage thresholds are 100% across the board.

### Website (`website/`)

Static React app (no bundler): `index.html` loads `data.js` (fetches and reshapes `db.json` — its header comment documents the db schema: `word-X`, `alt-X`, `phrase-N`, `caption-N`, `card-X` entries), `primitives.jsx`, `app.jsx`, and tweak panels. `website/db.json` is a *copy* of `src/db.json` — synced manually via `npm run sync-website-db` or automatically in CI.

### Tiered IPA audio pipeline

Documented in `website/docs/audio-pipeline.md` — read it before touching audio code. Key invariants:

- The canonical key is the exact `phon` string from db.json **including slashes**; the cache filename is `base64url(SHA-256(voiceId + "\0" + phon))` and must be computed identically in `website/scripts/audio-key.mjs` (build), `website/audio-resolve.js` (browser), and `website/lambda/ipa-synthesize/` (Lambda).
- Client resolution order: same-origin `/audio/{key}.mp3` (GitHub Pages) → public S3 URL → `POST` to the Lambda (Polly synthesis), gated by `audio-allowlist.json` (regenerate with `node scripts/generate-allowlist.mjs` from `website/` after the db changes).
- Audio config (S3 base URL, Lambda URL, voice) is set on `window.__ZULAPA_AUDIO__` in `index.html`.

### Deployment

`.github/workflows/deploy.yml` deploys `website/` to GitHub Pages on push to master: copies `src/db.json` into the site, regenerates the allowlist, and optionally mirrors cached MP3s from S3 into `./audio/`.
