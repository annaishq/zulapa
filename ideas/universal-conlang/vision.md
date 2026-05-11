# Vision

## What we are building

A universal engine for constructing languages. Every linguistic concept -- phonemes, morphemes, syntax, semantics -- is stored as relational data, not hardcoded in program logic. The engine composes these primitives through feature unification to generate surface forms, glosses, and semantic interpretations.

This is grammar as data.

## Why it matters

Linguistics is taught through abstract theory and paper exercises. Building a language -- constructing its phonology, designing its morphology, reasoning about its syntax -- is the fastest path to understanding how language works. This tool makes that construction concrete: every choice becomes a row in a table, and the engine validates those choices by composing them in real time.

## Who this is for

- **Undergraduate linguistics students** exploring phonology, morphology, syntax, and semantics through a hands-on toy
- **Conlang creators** who want an engine that understands linguistic theory rather than reinventing it
- **LLM-assisted language designers** who use the MCP server to explore, compose, and validate language structures with AI

## Core principles

1. **Linguistic accuracy.** Tables correspond to actual linguistic concepts. The engine's composition algorithm reflects how the brain processes meaning (incremental feature unification, supported by Levelt 1999 and Tanenhaus et al. 1995).

2. **Grammar as data.** No hardcoded rules. Tags enable natural classes. Feature bundles encode selection and projection. Phonotactics are constraint-based.

3. **Universal.** The engine models any language: isolating, agglutinative, fusional, polysynthetic. Word order is configurable. Inventive structural positions (a god-subject slot, a cat-interruption slot) are supported through tagged constituent templates.

4. **LLM-friendly.** A first-class MCP server gives AI assistants the tools to search, compose, suggest, and validate language structures. The engine becomes a collaborative language design partner.

5. **Incremental composition.** Meaning resolves left-to-right as morphemes unify their feature bundles. This matches psycholinguistic evidence for incremental processing and produces gloss output at every step.

## What we are not building (yet)

- Speech synthesis or audio generation
- Natural language evolution simulation (sound change over time)
- Multi-user collaboration or version history
- A full production CMS
