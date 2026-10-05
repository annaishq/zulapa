import * as _ from '../lang'

export const kwi = _.word('kwi', {
  adj: 'prun (color)',
  see: () => [_.colors],
})

export const kwiyin = _.word('kwiyin', {
  noun: 'prune, September',
  etym: () => [_.kwi, _.yin],
  see: () => [_.fruits, _.seasons],
})
