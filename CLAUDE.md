# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical rule

**Do not commit in this repository** (see AGENTS.md). Never run `git commit` or create commits via automation. Leave changes unstaged so the author reviews and commits themselves.

## What this is

Zulapa is a constructed language (conlang) by Anna Ishq. Code is MIT; the language itself is private.

The language is under review. The rules are being settled one page at a time on a docs site, and a new compiler will follow them. The first compiler and website are frozen.

This is a pnpm workspace:

- **`docs/`** — the review site, built with [minidoc](https://minidoc.dev) in the style of `../muse` and `../editor`. Deployed to GitHub Pages.
- **`packages/zulapa/`** — the new compiler. For now it holds only the rules, as YAML fixtures under `design/`.
- **`packages/legacy/`** — the first compiler (`src/`), its website (`website/`), and the older notes and texts. Frozen: do not change the language or the engine there.

## Commands

```bash
pnpm install
pnpm dev          # docs dev server: watch, rebuild, live reload
pnpm run docs     # build the site into docs/dist (`pnpm docs` is a pnpm built-in, use `run`)
pnpm makedb       # legacy: compile the language → packages/legacy/src/db.json + llms/*.md
```

## The review (`docs/`, `packages/zulapa/design/`)

- A page is a markdown file under `docs/content/pages/`, listed in `docs/content/config.yaml`.
- A `rules` fence names a file of `packages/zulapa/design/` (without `.yaml`). `docs/src/rules.mjs` draws it.
- A rule is a `name`, a `text` and `cases`. A case has one of three shapes, told apart by its keys (the header of each fixture file describes them):
  - a join: `before` (the word so far, as morphemes with spaces; left out for a morpheme alone), `part`, and `after` with its `class` and `gloss`;
  - a sound: `word` and `ipa`;
  - a phrase: `text`, `words` (the morphemes of each word), `gloss` (one per word) and `translation`.
- `legacy` gives the chain for the frozen engine, with ids and dots, when an id is not the name. `source` says where a case comes from.
- A gloss follows the Leipzig Glossing Rules (see `docs/content/pages/GLOSSING.md`): hyphens between morphemes, periods inside one, `EP` for a joining sound. Every label in capitals must be listed in `packages/zulapa/design/glosses.yaml`; the build fails otherwise. `docs/src/gloss.mjs` maps the glosses of the frozen engine to these labels.
- A rule with a `conflict` is not settled; `open` is its question. A settled conflict becomes a plain rule.
- The build runs every case through the frozen engine (`packages/legacy/src/say.ts`, called from `docs/src/legacy.mjs`) and marks the cases where its word, class or gloss differ. The states of `before` and `part` shown on the page are read from the frozen engine.
- Do not add a case whose morpheme has `y` as its only vowel followed by a suffix other than `y` (such as `my` + `m`), or by a prefix (such as the order `y` + `ne`): the frozen engine runs out of memory while it builds its error. Give such a case a `legacy` chain without the `y` (`ne.agu` for `ynexagu`). `y` before a root (`y.fa`) only fails.

Write the pages and the fixtures in plain English: common words, short sentences, one claim per sentence. The language is Anna's: state what the sources say and ask, do not decide a conflict.

## Legacy (`packages/legacy/`)

Run its scripts from that directory (`pnpm makedb`, `pnpm test`, `pnpm say`, `pnpm find`).

- **`src/conlib/`** — the generic engine: entry types, morpheme joining (`joinMorphemes.ts`), prefix/suffix machinery, phonology/orthography (`writing.ts`), compilation (`compile.ts`).
- **`src/conlang/`** — the language content: roots, vocabulary by topic (`concepts/`), prefixes/suffixes, poems, songs. Entries register themselves on import.
- **`llms/*.md`** — the compiled grammar cards, vocabulary and phrases, readable in one pass.
- **`website/`** — the old static React site, no longer deployed. Its audio pipeline is documented in `website/docs/audio-pipeline.md`.
- The jest suite has stale expectations and does not pass.
- A husky pre-commit hook (root `package.json`) runs `makedb` and stages `packages/legacy/src/db.json`.
