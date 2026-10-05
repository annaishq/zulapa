import * as _ from '../lang'

// FIXME: on rename, fix suffix/uki
export const iki = _.word('iki', {
  adj: 'court',
  suff: 'court',
  see: () => [_.uki, _.count],
})
