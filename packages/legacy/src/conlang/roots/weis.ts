import * as _ from '../lang'

export const weis = _.word('weis', {
  adj: 'empty',
  see: () => [],
})

export const goweis = _.word('goweis', {
  noun: 'desolation',
  verb: 'to desolate',
  etym: () => [_.go, _.weis],
})

export const neweis = _.word('neweis', {
  adj: 'full',
  verb: 'to satisfy',
  etym: () => [_.ne, _.weis],
})
