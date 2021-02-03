import * as _ from '.'

export const nefa = _.word('nefa', {
  verb: 'to close eyes, to not look',
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
