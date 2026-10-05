import * as _ from '../lang'

export const pal = _.word('pal', {
  noun: 'butt',
  verb: 'to sit',
})

export const palil = _.word('palil', {
  noun: 'apricot, July',
  etym: () => [_.pal, _.lil],
  see: () => [_.fruits, _.seasons],
})

export const qepal = _.word('qepal', {
  noun: 'anus',
  etym: () => [_.qe, _.pal],
})

export const palus = _.word('palus', {
  noun: 'meditation',
  verb: 'to feel',
  etym: () => [_.pal.verb, _.us.adv],
  see: () => [_.fenus, _.gahilus],
})
