import * as _ from '../lang'

export const pu = _.word('pu', {
  adj: 'tomato color',
  see: () => [_.colors],
})

export const pantame = _.word('pantame', {
  noun: 'tomato, August',
  etym: () => [_.pan, _.tame],
  see: () => [_.fruits, _.food, _.seasons],
})
