import * as _ from '../lang'

export const fen = _.word('fen', {
  noun: 'knee',
  pos: 'kneeling',
  verb: 'to go',
})

export const feno = _.word('feno', {
  verb: 'to run',
  etym: () => [_.fen, _.o],
})

export const fenus = _.word('fenus', {
  noun: 'contemplation',
  verb: 'to care',
  etym: () => [_.fen.verb, _.us.adv],
  see: () => [_.palus, _.gahilus],
})
