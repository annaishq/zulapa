# TODO

The review of Zulapa: what is left to settle. The language is Anna's: a
page states what the sources say and asks, it does not decide.

## Open conflicts

On the [Moods](docs/content/pages/MOODS.md) page:

- **A mood after a vowel.** The second video lesson says `mali` and `lali`,
  with `l`. The third lesson says `gai`, and the engine and phrase 197 say
  `lai`, with nothing.
- **A mood with no subject.** Phrase 197 uses `lai` alone as *Kiss gently*.
  An order now takes `y`, and only a subject makes an action. Is it `ylai`?
  Is `lai` alone a noun?

## Pages to write

Each page is a markdown file under `docs/content/pages/`, listed in
`docs/content/config.yaml`, with its rules in `packages/zulapa/design/`.

- **Gender.** `wi`, `nu`, `to` (NB, F, M), and the gender suffixes. Sources:
  `concepts/gender.ts`, and the note *Huge gender rewrite* (November 2023)
  in `concepts/evolution.ts`. Today only one line of the Subjects page
  covers it.
- **Cases and relations.** `fu` ERG, `ni` DAT, `ju` before, `xu` after, `wu`
  GEN, `sau`, `tu`, `ko`, `le`, `si`. Sources: `prefix/case.ts`,
  `concepts/prep.ts`. Today only `m` (ACC) and `wu` appear, in phrases.
- **Numbers.** Counting, big and small numbers. Source:
  `concepts/counting.ts`.
- **Making words.** What each suffix does: `da`, `egi`, `ek`, `gi`, `iwi`,
  `lil`, `nu`, `nur`, `pa`, `s`, `uki`, `es` (NMLZ). Also the roots used as
  manner suffixes: `au` *lovingly*, `qer` *fiercely*, `do` *intensely*, `gi`
  *gently, with love* (the Verbs card).
- **Questions and *to be*.** `eja`, `dem`, `difu`, `diwu`, and *To be or
  not to be* in `concepts/grammar.ts`. Today only `dem` asking *when*.
- **Complex forms.** Verb deranking, in `concepts/complex.ts`.

The sources are under `packages/legacy/src/conlang/`.

## Loose ends

- **`x` in the script.** It has no Telugu sign: the engine writes a Latin
  `x` (`లేxఅవి`).
- **Long marks in the script.** The engine writes `a`, `e` and `o` on a
  consonant with the long marks (మా, మే, మో), but the vowels are short.
  `a` alone is the short అ.
- **An example for LOVED.** `a` has no example on the Subjects page, and the
  rule that a mood meeting the same vowel takes `l` has no case. `ma` and
  `ga` already carry the `a`. Does `la` + `a`, `lala`, exist?
- **`u` has no example words** in the table of the five vowels (INF and
  PULL), on the Subjects page.
- **`keoda` and `lamigoa`.** The Phonology card gives them as examples of
  the stress. They are not in the engine. What do they mean?
- **The Verbs card** says that every mood marks the intent of an action.
  The Roles page now says that `a` and `y` are adjectives.

## The new compiler

Every case marked *differs from legacy* on the site is a change the new
compiler must make. A page or a file could list them all, from the build,
as a first spec. Among them:

- `w` is /w/, `sh` is /ʂ/, `j` is /ʐ/.
- The stress, on the root (the engine marks none).
- The order is the prefix `y` (`yfa`, said /jifa/), not a silent suffix.
- No `h`: `hapan` is `xapan`.
- `k` and `q` do not join (`dakaqa`): the engine tests `l` for `k`.
- A tense needs a subject: `falem` does not exist.
