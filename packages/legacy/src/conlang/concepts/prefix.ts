import * as _ from '../lang'

_.du
export const pref = _.card('prefix/suffix', {
  // open: true,
  desc: () => `
# List of all prefix and suffix

## Mood markings

| moods |
| :---------- |
| ${_.refAndGlo(_.i$)} |
| ${_.refAndGlo(_.u$)} |
| ${_.refAndGlo(_.o$)} |
| ${_.refAndGlo(_.a$)} |
| ${_.refAndGlo(_.y$)} |

## Verb

The full list of subjects to transform nouns into verbs is on another page:
${_.subj}

## Meaning

* ${_.ne} (negation, opposition)
* ${_.ko} (comitative case: with)
* ${_.sau} (privative case: without)

* ${_.phrase('Negation (bald)', _.neji)}

## Adjective ${_.le}

TODO

## Adverb ${_.si}

TODO
`,
})
