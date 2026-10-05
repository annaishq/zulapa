import * as _ from '../lang'

export const tha = _.word('tha', {
  adj: 'far',
  def: 'up',
  desc: () => 'Also means top or distal',
  see: () => [_.jo],
})

export const thafo = _.word('thafo', {
  verb: 'to fall',
  etym: () => [_.tha, _.fo],
})

export const thame = _.word('thame', {
  noun: 'head',
  adj: 'far',
  pref: 'top or distal',
  see: () => [_.jo],
})

export const dutha = _.word('dutha', {
  noun: 'face',
  etym: () => [_.du, _.tha],
})

export const duthany = _.word('duthany', {
  verb: 'to laugh',
  etym: () => [_.dutha, _.y$],
})

export const thawe = _.word('thawe', {
  noun: 'right cheek',
  etym: () => [_.tha, _.we],
})

export const thase = _.word('thase', {
  noun: 'left cheek',
  etym: () => [_.tha, _.se],
})

export const notha = _.word('notha', {
  noun: 'occiput (back of the head)',
  etym: () => [_.no, _.tha],
})

export const thada = _.word('thada', {
  noun: 'parent',
  etym: () => [_.tha, _.oda],
  see: () => [_.family],
})

export const thanu = _.word('thanu', {
  noun: 'mother',
  scla: 'noun',
  cla: 'noun',
  etym: () => [_.tha, _.nu],
  see: () => [_.family],
})

export const thawi = _.word('thawi', {
  noun: 'enby parent',
  etym: () => [_.tha, _.wi],
  see: () => [_.family],
})

export const thato = _.word('thato', {
  noun: 'father',
  etym: () => [_.tha, _.to],
  see: () => [_.family],
})
