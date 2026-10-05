import * as _ from '../lang'

export const ne$ = _.word('ne', {
  id: 'ne$',
  verb: 'to not be',
})

export const neoda = _.word('neoda', {
  noun: 'corpse',
  etym: () => [_.ne, _.oda],
  see: () => [_.nem],
})

export const nepa = _.word('nepa', {
  noun: 'abyss, nothingness',
})

export const nelo = _.word('nelo', {
  verb: 'to struggle',
  etym: () => [_.ne, _.loV],
  see: () => [_.gupi],
})

export const nedir = _.word('nedir', {
  verb: 'to appease',
  etym: () => [_.ne, _.ir],
})
