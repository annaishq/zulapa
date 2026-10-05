import * as _ from '../lang'

export const om = _.word('om', {
  noun: 'transcendence',
  adj: 'open, sacred',
  suff: 'temple, sacred',
})

export const omunu = _.word('omunu', {
  noun: 'witch',
  etym: () => [_.om, _.nu],
})

export const ominu = _.word('ominu', {
  noun: 'witch sister',
  etym: () => [_.om, _.xinu],
})
