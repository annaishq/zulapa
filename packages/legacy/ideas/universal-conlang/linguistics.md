# Linguistics

The engine models language across four levels: phonology, morphology, syntax, and semantics. Each level corresponds to a set of relational tables. The tables encode linguistic theory as data -- the engine reads them and composes language through feature unification.

---

## Phonology

### `phonemes`

A phoneme is the smallest distinctive sound unit in a language. The phoneme `/p/` and the phoneme `/b/` differ by one feature (voicing), and swapping them changes meaning (`pat` vs `bat`). This table encodes the **distinctive feature matrix** (Jakobson, Fant & Halle 1952; Chomsky & Halle 1968): each phoneme is defined by its articulatory and acoustic properties.

| Column   | Type          | Description                                                                |
| -------- | ------------- | -------------------------------------------------------------------------- |
| id       | uuid          |                                                                            |
| symbol   | text          | Orthographic representation, e.g. `'p'`, `'a'`, `'ʃ'`                      |
| ipa      | text          | IPA symbol, e.g. `'/p/'`, `'/a/'`, `'/ʃ/'`                                 |
| type     | enum          | `consonant`, `vowel`, `tone`, `diphthong`                                  |
| place    | text nullable | Place of articulation: `bilabial`, `alveolar`, `velar`, etc. (consonants)  |
| manner   | text nullable | Manner of articulation: `plosive`, `nasal`, `fricative`, etc. (consonants) |
| height   | text nullable | Vowel height: `close`, `near-close`, `mid`, `open`, etc. (vowels)          |
| backness | text nullable | Vowel backness: `front`, `central`, `back` (vowels)                        |
| rounded  | boolean       | Rounded lips (vowels)                                                      |
| voiced   | boolean       | Vocal fold vibration (consonants)                                          |
| tags     | text[]        | Natural class membership, e.g. `['obstruent', 'labial', 'voiced']`         |

**Tags are the key design choice.** Phonotactic rules do not reference individual phonemes -- they reference natural classes through tags. A rule that forbids `[+voiced, +obstruent]` clusters applies to `/b/, /d/, /g/, /z/, /v/` without enumerating them. Tags make rules declarative and universal.

### `phonotactics`

Phonotactic constraints define how phonemes combine into syllables and words. Each constraint specifies a context (onset, nucleus, coda), a condition (which tagged classes are adjacent), and what happens when the condition is violated (repair strategy).

| Column       | Type          | Description                                                                             |
| ------------ | ------------- | --------------------------------------------------------------------------------------- |
| id           | uuid          |                                                                                         |
| description  | text          | Human-readable, e.g. `'No voiced obstruent clusters in onset'`                          |
| context      | text          | `onset`, `coda`, `nucleus`, `syllable_boundary`, `word_boundary`                        |
| constraint   | enum          | `forbid` (sequence is illegal), `require` (sequence must exist)                         |
| left_tags    | text[]        | Tags of the first phoneme in the sequence                                               |
| right_tags   | text[]        | Tags of the second phoneme in the sequence                                              |
| repair       | text nullable | `epenthesis` (insert sound), `deletion` (remove sound), `feature_change` (e.g. devoice) |
| repair_sound | text nullable | The epenthetic sound, e.g. `'ə'`                                                        |

### Syllable templates

Not a table, but a set of patterns encoded in the language configuration. Examples: `'CV'` (open syllables only), `'(C)(C)V(C)'` (max onset of two consonants, optional coda), `'CVC'` (all syllables must have both onset and coda).

---

## Morphology

### `morphemes`

A morpheme is the smallest meaning-bearing unit. In Distributed Morphology (Halle & Marantz 1993), morphemes are **feature bundles** -- they do not carry meaning in isolation but constrain the compositional space. A morpheme like `-ed` carries the feature `[tense: past]`; a root like `break` carries `[category: verb, meaning: "separate into pieces"]`. The engine's job is to **unify** these feature bundles as they combine.

| Column      | Type            | Description                                                                        |
| ----------- | --------------- | ---------------------------------------------------------------------------------- |
| id          | uuid            |                                                                                    |
| form        | text            | Surface form, e.g. `'un'`, `'break'`, `'able'`, `'ed'`                             |
| type        | enum            | `root`, `prefix`, `suffix`, `infix`, `circumfix`, `clitic`, `particle`, `suprafix` |
| gloss       | text            | Interlinear gloss abbreviation, e.g. `'NEG'`, `'PST'`, `'1SG'`, `'sit'`            |
| features    | jsonb           | Feature bundle. Examples below.                                                    |
| selection   | jsonb           | What this morpheme requires from its structural context. Examples below.           |
| tags        | text[]          | Morphological category tags, e.g. `['grammatical', 'voice', 'valence-changing']`   |
| description | text nullable   | Natural language explanation                                                       |
| etymology   | uuid[] nullable | Morpheme IDs this one derives from                                                 |
| see_also    | uuid[] nullable | Related morpheme IDs                                                               |

### `features` structure

The features column encodes what a morpheme **contributes** to the clause. It is a JSON object where keys are feature names and values are feature values.

**Passive prefix** (`es`):
```json
{
  "voice": "passive",
  "promotes": "patient",
  "demotes": "agent"
}
```

**Subject prefix** (`o`):
```json
{
  "person": 1,
  "number": "sg",
  "role": "subject"
}
```

**Continuous prefix** (`lu`):
```json
{
  "aspect": "continuous"
}
```

**Continuous-remember prefix** (`lue`):
```json
{
  "aspect": "continuous",
  "meaning": "remember"
}
```

**Verb root** (`rumi`):
```json
{
  "category": "verb",
  "meaning": "embrace"
}
```

**Nominalizer suffix** (`n`):
```json
{
  "function": "nominalize",
  "output_category": "noun"
}
```

### `selection` structure

The selection column encodes what a morpheme **requires** from its environment. It mirrors c-selection (categorial) and s-selection (semantic) from generative grammar.

**Passive prefix** (`es`):
```json
{
  "requires": "verb_root",
  "direction": "right"
}
```
The passive prefix needs a verb root to its right before it can resolve.

**Nominalizer suffix** (`n`):
```json
{
  "requires": "verb_phrase",
  "direction": "left"
}
```
The nominalizer looks left for a fully formed verb phrase.

**Continuous-remember prefix** (`lue`):
```json
{
  "requires": "verb_root",
  "direction": "right"
}
```

### Feature unification

When morphemes combine, the engine iterates left-to-right through the surface sequence. For each morpheme:

1. **Push** its features into the accumulated feature structure
2. **Check** its selection requirements against what has been accumulated
3. If selection direction is `'left'`: the requirement must already be satisfied
4. If selection direction is `'right'`: the requirement is pending, to be resolved by a later morpheme
5. At end of chain: verify no pending requirements remain

See `docs/architecture.md` for the full algorithm.

### Morpheme types

| Type        | Description                                     | Example                              |
| ----------- | ----------------------------------------------- | ------------------------------------ |
| `root`      | Lexical morpheme carrying core meaning          | `break`, `run`, `cat`                |
| `prefix`    | Attaches before the root                        | `un-`, `re-`, Zulapa `o-` (1SG)      |
| `suffix`    | Attaches after the root                         | `-ed`, `-ing`, Zulapa `-n` (NMLZ)    |
| `infix`     | Inserts into the root                           | Tagalog `-um-` in `bumili`           |
| `circumfix` | Wraps around the root                           | German `ge-...-t` in `gemacht`       |
| `clitic`    | Phonologically dependent but syntactically free | English `'s`, French `je`            |
| `particle`  | Free grammatical word                           | Japanese `wa`, Mandarin `le`         |
| `suprafix`  | Suprasegmental change (stress, tone)            | English `récord` (N) vs `recórd` (V) |

---

## Syntax

### `syntax`

The syntax table describes constituent order and phrase structure. It uses a **slot-based template**: each row defines a position in the clause and the grammatical role it carries. Tags make the system extensible -- a standard SVO language has `S`, `V`, `O` slots. A language with a mandatory god-subject has an additional `G` slot. A language with optional cat-interruption has a `C` slot.

| Column      | Type          | Description                                                                   |
| ----------- | ------------- | ----------------------------------------------------------------------------- |
| id          | uuid          |                                                                               |
| order       | int           | Position in the clause (1-based)                                              |
| constituent | text          | Symbol, e.g. `'S'`, `'V'`, `'O'`, `'G'`, `'C'`                                |
| role        | text nullable | Grammatical role assigned by position, e.g. `'subject'`, `'object'`, `'verb'` |
| required    | boolean       | Whether this slot must be filled                                              |
| tags        | text[]        | Categorization, e.g. `['core', 'argument']`, `['optional', 'adjunct']`        |

**Example: English SVO**
```
order=1, constituent='S', role='subject', required=true
order=2, constituent='V', role='verb', required=true
order=3, constituent='O', role='object', required=false
```

**Example: Zulapa (free word order)**
```
order=1, constituent='*', role='free', required=false
```
In free word order languages, grammatical roles come from morpheme features (case marking, agreement), not from position. The engine reads `role='free'` and bypasses positional role assignment, relying instead on the feature unification of individual morphemes.

**Example: Inventive language with god-subject**
```
order=1, constituent='G', role='god_subject', required=true, tags=['core', 'theological']
order=2, constituent='V', role='verb', required=true
order=3, constituent='O', role='object', required=false
```

---

## Semantics

### Semantic types

Following Montague (1973) and Heim & Kratzer (1998), each constituent has a semantic type that determines how it composes:

| Type                | Notation        | Description                            | Example                 |
| ------------------- | --------------- | -------------------------------------- | ----------------------- |
| Entity              | `<e>`           | An individual                          | `John`, `the cat`       |
| Truth value         | `<t>`           | A proposition                          | `John runs`             |
| Predicate           | `<e,t>`         | A function from entity to truth        | `run`, `sit`, `embrace` |
| Modifier            | `<<e,t>,<e,t>>` | A function from predicate to predicate | `slowly`, `quickly`     |
| Transitive relation | `<e,<e,t>>`     | A function from entity to predicate    | `love`, `hold`, `see`   |
| Quantifier          | `<<e,t>,t>`     | A function from predicate to truth     | `every`, `some`, `no`   |

Semantic type is stored as a field on the morpheme's `features` column:
```json
{
  "semantic_type": "<e,<e,t>>"
}
```

### Incremental meaning resolution

Psycholinguistic evidence (Levelt 1999, Tanenhaus et al. 1995) shows that the brain processes language **incrementally** -- each morpheme constrains interpretation immediately, without waiting for the end of the clause. The engine mirrors this: gloss is emitted step by step as features unify.

This is the same unification algorithm described in Morphology above, run in "explain" mode where each unification step produces a gloss segment.

---

## Zulapa example: `es.o.lue.rumi.n`

A complex Zulapa phrase with passive voice, continuous aspect, embedded remembering, and nominalization.

```
Surface:   es.o.lue.rumi.n
Gloss:     PASS.1SG.CONT.REMEMBER.embrace.NMLZ
Reading:   "the being-held-in-continuous-memory"
           (a nominalized passive of continuously remembering an embrace)

Translation from source:
  "I love (being-held (by you)-memory-sensation)."
  — evolution.ts, line 289
```

### Incremental unification trace

```
Step 1: es
  Push:    {voice: passive, promotes: patient, demotes: agent}
  Select:  {requires: verb_root, direction: right} — PENDING
  Gloss:   PASS

Step 2: es.o
  Push:    {person: 1, number: sg, role: subject}
  Select:  none
  Gloss:   PASS.1SG
  Note:    in passive voice, subject = patient — "I am being verbed"

Step 3: es.o.lue
  Push:    {aspect: continuous, meaning: remember}
  Select:  {requires: verb_root, direction: right} — PENDING
  Gloss:   PASS.1SG.CONT.REMEMBER
  Note:    lue etymology = lu (CONT) + em (life/past)

Step 4: es.o.lue.rumi
  Push:    {category: verb, meaning: embrace}
  ✓ Select: verb_root satisfied by rumi (resolves pending from step 1 AND step 3)
  Gloss:   PASS.1SG.CONT.REMEMBER.embrace

Step 5: es.o.lue.rumi.n
  Push:    {function: nominalize, output_category: noun}
  Select:  {requires: verb_phrase, direction: left} — satisfied by the entire chain
  Gloss:   PASS.1SG.CONT.REMEMBER.embrace.NMLZ

✓ All selections satisfied. Output category: noun (a nominalized verb phrase).
```

### Feature structure at resolution

```json
{
  "voice": "passive",
  "subject": {"person": 1, "number": "sg", "role": "patient"},
  "aspect": "continuous",
  "meaning": "embrace",
  "modal": "remember",
  "output_category": "noun"
}
```

### Why `lue` ≠ `CONT.embrace`

`lue` carries its own meaning: "continuously remember." Its etymology is `lu` (CONT) + `em` (life, past). The remembering lives inside the prefix -- `lue.rumi` means an embodied, continuous memory of being embraced. The two timeframes (the past event and the present recollection) collapse into one bodily sensation.

Compare this to another way:

```
o.au      o.ji.n              es.o.lu.rumi.n               fu.ti
1SG.love  1SG.remember.NMLZ   PASS.1SG.CONT.embrace.NMLZ   by.you
"I love (the fact of) remembering that I was being held by you"
```

Here `ji` (remember) is a separate verb root carried by its own phrase `o.ji.n`. The passive chain `es.o.lu.rumi.n` uses plain `lu` (simple continuous, no "remember" meaning), so it reduces to PASS.1SG.CONT.embrace.NMLZ -- just "being held." Remembering and being held are two distinct events: you recall a past one from outside it.

The first version with `lue` fuses them. You do not remember being held; you *continuously re-experience* it.
