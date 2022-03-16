import * as _ from '../lang'

export const wi = _.word('wi', {
  adj: 'prun (color)',
  see: () => [_.colors],
})

export const wiyon = _.word('wiyon', {
  noun: 'prune, September',
  etym: () => [_.wi, _.yin],
  see: () => [_.fruits, _.seasons],
})