# Technical

How to build and run the conlang engine.

---

## Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Database | Supabase (PostgreSQL) | Hosted Postgres with built-in auth, realtime, edge functions. The JSONB columns for features/selection naturally fit morphological data. |
| Composition engine | TypeScript (conlib package) | The engine must run in Node (build), browser (React islands), and edge (Supabase functions). TypeScript is the single language that compiles to all three. |
| Website | Astro + React islands | Astro pre-renders all word pages at build time from the database. React islands handle interactive components (word composer, gloss viewer, search). |
| MCP server | Node.js + @modelcontextprotocol/sdk | Standard MCP transport. Tools call the conlib engine and Supabase directly. |
| Styling | Tailwind CSS or CSS modules | Lightweight, tree-shaken, works with Astro. |
| Package manager | npm workspaces | Monorepo with shared packages and independent apps. |

---

## Monorepo structure

```
conlang-engine/
├── packages/
│   ├── conlib/                    # Composition engine (pure TypeScript)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts           # Public API: compose(), validate(), phon()
│   │       ├── compose.ts         # Feature unification algorithm
│   │       ├── join.ts            # Phonological surface joining
│   │       ├── gloss.ts           # Gloss generation from features
│   │       ├── phonology.ts       # IPA + writing system transliteration
│   │       ├── validate.ts        # Phonotactic and feature validation
│   │       └── types.ts           # MorphemeData, Composition, Selection, etc.
│   │
│   └── database/                  # Database layer
│       ├── migrations/            # SQL migration files
│       │   ├── 001_phonemes.sql
│       │   ├── 002_phonotactics.sql
│       │   ├── 003_morphemes.sql
│       │   ├── 004_syntax.sql
│       │   ├── 005_compositions.sql
│       │   ├── 006_phrases.sql
│       │   └── 007_triggers.sql   # Cache invalidation triggers
│       ├── seed/
│       │   ├── seed-zulapa.ts     # Migrate existing Zulapa data from src/conlang/
│       │   └── seed-sample.ts     # Sample languages for testing
│       └── edge-functions/
│           └── compose/
│               └── index.ts       # POST /compose edge function
│
├── apps/
│   ├── website/                   # Astro site
│   │   ├── astro.config.mjs
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── index.astro           # Homepage
│   │   │   │   ├── words/[form].astro    # Word detail (SSG from morphemes)
│   │   │   │   ├── phonemes.astro         # Phoneme inventory
│   │   │   │   ├── syntax.astro           # Syntax visualization
│   │   │   │   └── compose.astro          # Interactive composer
│   │   │   ├── components/
│   │   │   │   ├── MorphemeCard.tsx       # React island: word card
│   │   │   │   ├── GlossViewer.tsx        # React island: interlinear gloss
│   │   │   │   ├── WordComposer.tsx       # React island: compose words live
│   │   │   │   ├── PhonemeGrid.tsx        # React island: IPA chart
│   │   │   │   └── SearchBar.tsx          # React island: morpheme search
│   │   │   ├── layouts/
│   │   │   │   └── BaseLayout.astro
│   │   │   └── lib/
│   │   │       ├── supabase.ts            # Supabase client (SSG)
│   │   │       └── compose.ts             # Helper: call edge function or conlib
│   │   └── public/
│   │
│   └── mcp/                       # MCP server
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts            # MCP server entry: stdio transport
│           └── tools/
│               ├── search-morphemes.ts    # Full-text search across morphemes
│               ├── get-morpheme.ts        # Fetch single morpheme by ID or form
│               ├── compose-word.ts        # Compose a morpheme sequence
│               ├── suggest-roots.ts        # Suggest new roots fitting phonotactics
│               ├── validate-form.ts        # Check if a form is phonotactically valid
│               ├── get-grammar.ts          # Fetch syntax and phonotactics
│               ├── create-morpheme.ts      # Insert a new morpheme
│               └── translate.ts            # Gloss a phrase (compose + explain)
│
├── docs/                          # Project documentation
│   ├── vision.md
│   ├── linguistics.md
│   ├── architecture.md
│   └── technical.md               # This file
│
├── archeology/                    # Old Zulapa code preserved for reference
│
└── package.json                   # Root: workspaces config
```

---

## Development workflow

### Prerequisites

- Node.js 20+
- Supabase CLI (`npx supabase`)
- A Supabase project (free tier is sufficient)

### Setup

```bash
# Clone and install
git clone <repo>
npm install

# Start Supabase locally
npx supabase start

# Run migrations
npx supabase db push

# Seed the database with sample language
npx ts-node packages/database/seed/seed-sample.ts
```

### Development

```bash
# Conlib (with tests)
cd packages/conlib
npm run dev        # Watch mode with tsc
npm test           # Run unit tests

# Website
cd apps/website
npm run dev        # Astro dev server on localhost:4321

# MCP (configure in Cursor settings)
cd apps/mcp
npm run build
# Point Cursor MCP config to apps/mcp/dist/index.js
```

### Build

```bash
# Build everything
npm run build

# Website SSG (fetches from Supabase, pre-renders all pages)
cd apps/website
npm run build      # Output in apps/website/dist/

# Deploy website
npx supabase functions deploy compose
# Deploy Astro output to Vercel/Netlify/GitHub Pages
```

### Testing

```bash
# Conlib unit tests
cd packages/conlib
npm test

# Integration tests (Supabase + conlib)
cd packages/database
npm test
```

---

## MCP tools reference

The MCP server exposes these tools to LLM clients (Cursor, Claude):

| Tool | Purpose | Input | Output |
|------|---------|-------|--------|
| `search_morphemes` | Find morphemes by form, gloss, or tags | `query: string, type?: string, tags?: string[]` | `Morpheme[]` |
| `get_morpheme` | Fetch full detail for one morpheme | `id: string` | `Morpheme` |
| `compose_word` | Compose a morpheme sequence | `morpheme_ids: string[]` | `Composition` |
| `suggest_roots` | Suggest new root forms fitting phonotactics | `syllables: number, meaning: string` | `string[]` |
| `validate_form` | Check if a form is phonotactically valid | `form: string` | `{valid, violations}` |
| `get_grammar` | Fetch syntax and phonotactics | none | `Syntax[], Phonotactics[]` |
| `create_morpheme` | Insert a new morpheme | `MorphemeInput` | `Morpheme` |
| `translate` | Gloss and explain a phrase | `text: string, morpheme_ids: string[]` | `{gloss, features, explanation}` |

### MCP configuration for Cursor

In Cursor's MCP settings:

```json
{
  "mcpServers": {
    "conlang-engine": {
      "command": "node",
      "args": ["apps/mcp/dist/index.js"],
      "env": {
        "SUPABASE_URL": "<your-project-url>",
        "SUPABASE_ANON_KEY": "<your-anon-key>"
      }
    }
  }
}
```

---

## Environment variables

| Variable | Used by | Description |
|----------|---------|-------------|
| `SUPABASE_URL` | website, mcp, edge | Supabase project URL |
| `SUPABASE_ANON_KEY` | website, mcp | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE` | edge, seed | Supabase service role key (for admin operations) |
| `DATABASE_URL` | local dev | Local Supabase connection string |

---

## Dependencies

### packages/conlib

```json
{
  "name": "@conlang/conlib",
  "version": "0.1.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test": "vitest"
  },
  "devDependencies": {
    "typescript": "^5.4",
    "vitest": "^1.6"
  }
}
```

No runtime dependencies. Conlib is pure logic.

### apps/website

```json
{
  "name": "@conlang/website",
  "dependencies": {
    "astro": "^4.0",
    "react": "^18.0",
    "react-dom": "^18.0",
    "@astrojs/react": "^3.0",
    "@supabase/supabase-js": "^2.0",
    "@conlang/conlib": "workspace:*"
  }
}
```

### apps/mcp

```json
{
  "name": "@conlang/mcp",
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0",
    "@supabase/supabase-js": "^2.0",
    "@conlang/conlib": "workspace:*"
  }
}
```
