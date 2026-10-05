import * as _ from '../lang'

export const al = _.word('al', {
  noun: 'sky',
  verb: 'to rise',
  adj: 'up',
  pref: 'up',
  see: () => [_.so],
})

export const alyuru = _.word('alyuru', {
  noun: 'top of vagina',
  adj: 'happy',
  glo: '*top*.**vagina**',
  etym: () => [_.al, _.yuru],
  desc: () => `
This should definitely have a name in english... Maybe not the 7th but a sky
nonetheless.
`,
})
