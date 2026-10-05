import * as _ from '../lang'

export const passive = _.card('passive', {
  desc: () => `
## Passive voice

This is something like saying 'there is' before the accord on subject
thus making "There is an I massaged in the future" is said as:

* ${_.phrase('I will be caressed.', _.es.o.mi.ir)}

It is applied before the conjugation: ${_.es.sha.nelil}.

When the conjugation starts with a consonant, we fix with an 'e'.

With the verb ${_.e}, it means 'there is a fact of':

* ${_.phrase('There is a me crazy.', _.es.o.e, _.ne.gu)}
* ${_.phrase('I am crazy.', _.o.e, _.ne.gu)}

## State, thing

When used as suffix on a word ending with a vowel, we add an 'n':

* ${_.phrase('Pragmatism', _.nanes)}
* ${_.phrase('Nakedness', _.nefe.es.ti)}
`,
})
