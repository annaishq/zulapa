import * as _ from '../lang'

export const pali = _.word('pali', {
  noun: 'to enchant',
  etym: () => [_.pa, _.li],
  desc: () => `To sing inside`,
})

export const pahau = _.word('pahau', {
  verb: 'to forgive',
  desc: () => `
Litt: receive everything 

${_.aupa} and ${_.pahau} are the same thing expressed from two different "places".

To forgive is to finally accept (receive) what happened (which does not mean we think it was OK).

Gratitude is receiving the present ${_.aupa}.

Trusting is receiving the whole spectrum of time ${_.zugu}, accepting life.
`,
})

export const pagi = _.word('pagi', {
  noun: 'hello',
  etym: () => [_.pa, _.gi],
})

export const pada = _.word('pada', {
  noun: 'everybody',
  glo: 'ALL.**body**',
  etym: () => [_.pa, _.da],
  see: () => [_.subj],
})
