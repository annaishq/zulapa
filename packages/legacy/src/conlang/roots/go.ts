import * as _ from '../lang'

export const goa = _.word('goa', {
  noun: 'big place',
  suff: 'big place',
  adj: 'vast',
  etym: () => [_.go, _.da],
})

export const gopona = _.word('gopona', {
  noun: 'pumpkin, October',
  etym: () => [_.go, _.pona],
  see: () => [_.fruits, _.seasons],
})

// Le pont
export const gawi = _.word('gawi', {
  noun: 'whale',
  etym: () => [_.go, _.awi],
})

// debout, penché.e en avant, on touche le sol avec les mains (éléphant qui boit)
export const goda = _.word('goda', {
  noun: 'elephant',
  etym: () => [_.go, _.oda],
})
