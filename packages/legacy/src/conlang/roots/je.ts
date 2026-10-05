import * as _ from '../lang'

export const je = _.word('je', {
  adj: 'dear',
  noun: '8 (emotion)',
  see: () => [_.count, _.adu],
})

export const jepa = _.word('jepa', {
  noun: 'belonging',
  etym: () => [_.je, _.pa],
  see: () => [_.ganes, _.jefi],
})

export const jefi = _.word('jefi', {
  adj: 'caring',
  etym: () => [_.je, _.fi],
  see: () => [_.nanes, _.jepa],
})
