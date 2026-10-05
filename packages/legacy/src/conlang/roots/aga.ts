import * as _ from '../lang'

export const aga = _.word('aga', {
  noun: 'music',
  adv: 'musically',
  desc: () => `
Melodies and stories unraveling through time.
`,
})

export const agana = _.word('agana', {
  noun: 'sound',
  etym: () => [_.aga, _.na],
})

export const agade = _.word('agade', {
  noun: 'echo',
  etym: () => [_.aga, _.de2],
})

export const akida = _.word('agaukida', {
  noun: 'temple',
  etym: () => [_.aga, _.uki, _.da],
})
