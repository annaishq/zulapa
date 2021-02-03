import * as _ from '.'

export const awi = _.word('awi', {
  noun: 'fish',
  verb: 'shine',
  adj: 'beautiful',
  see: () => [_.fawulama],
})

export const mawi = _.word('mawi', {
  noun: 'dolphin',
  etym: () => [_.mun, _.awi],
})

export const awiu = _.word('awiu', {
  noun: 'fin',
  verb: 'to swim',
  etym: () => [_.awi, _.u$],
})
