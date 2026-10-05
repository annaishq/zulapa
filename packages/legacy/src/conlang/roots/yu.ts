import * as _ from '../lang'

export const yu = _.word('yu', {
  noun: 'joy',
  adj: 'joyful',
})

export const yuru = _.word('yuru', {
  noun: 'vagina',
  verb: 'to vagina-hold',
  etym: () => [_.yu, _.ru],
})

export const eyu = _.word('eyu', {
  noun: 'maybe',
  def: 'if',
  etym: () => [_.e, _.yu],
})

export const yil = _.word('yil', {
  noun: 'fruit',
  adj: 'sweet',
  adv: 'sweetly',
  etym: () => [_.yu, _.il],
})

export const yulak = _.word('yulak', {
  verb: 'to play',
  noun: 'player',
  etym: () => [_.yu, _.lak.verb],
})
