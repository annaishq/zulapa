import * as _ from '../lang'

export const au = _.word('au', {
  noun: 'heart',
  verb: 'to love',
  adv: 'lovingly',
  adj: 'lovely',
  see: () => [_.zu],
})

export const auna = _.word('auna', {
  noun: 'love',
  etym: () => [_.au, _.na],
})

export const aupa = _.word('aupa', {
  noun: 'gratitude',
  desc: () => `
To love everything.
`,
  etym: () => [_.au, _.pa],
})

export const auau = _.word('auau', {
  verb: 'to make love',
  etym: () => [_.au.verb, _.au],
  see: () => [_.zuzu, _.qude],
  exam: () => [
    _.phrase(
      'Make love to me as if you washed yourself from a great sadness.',
      _.au.imp,
      _.si.falam,
      _.au
    ),
  ],
})
