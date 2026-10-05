import * as _ from '../lang'

export const tan = _.word('tan', {
  noun: 'sign',
})

export const tanom = _.word('tanom', {
  noun: 'meaning',
  verb: 'to mean',
  etym: () => [_.tan, _.om],
})

export const tana = _.word('tana', {
  noun: 'script',
  verb: 'to write',
  etym: () => [_.tan, _.na],
})

export const tanale = _.word('tanale', {
  noun: 'letter',
  etym: () => [_.tan, _.lil],
})

export const fatan = _.word('fatan', {
  verb: 'to read',
  noun: 'reader',
  etym: () => [_.fa, _.tan],
})
