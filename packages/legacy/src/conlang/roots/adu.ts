import * as _ from '../lang'

export const adu = _.word('adu', {
  noun: 'friend',
  adj: 'close',
})

// Downward facing dog
export const kadu = _.word('kadu', {
  noun: 'dog',
  adj: 'follower',
  etym: () => [_.qa, _.adu],
  desc: () => `The friend on four legs.`,
})

export const adufi = _.word('adufi', {
  noun: 'scarf',
  etym: () => [_.adu, _.fi],
})
