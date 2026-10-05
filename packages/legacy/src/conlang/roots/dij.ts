import * as _ from '../lang'

export const dij = _.word('dij', {
  noun: 'claw',
})

export const pedij = _.word('pedij', {
  noun: 'fork',
  etym: () => [_.pe3, _.dij],
})
