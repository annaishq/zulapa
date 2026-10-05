import * as _ from '../lang'

export const du = _.word('du', {
  def: 'front',
  pref: 'front',
  see: () => [_.we, _.no, _.se],
})

export const duda = _.word('duda', {
  noun: 'small sibling',
  etym: () => [_.du, _.oda],
  see: () => [_.noda, _.duwi, _.dunu, _.duto],
})

export const duto = _.word('duto', {
  noun: 'small brother/wind',
  etym: () => [_.du, _.to],
  see: () => [_.noto, _.duda],
})

export const dunu = _.word('dunu', {
  noun: 'small sister/tree',
  etym: () => [_.du, _.nu],
  see: () => [_.nonu, _.duda],
})

export const duwi = _.word('duwi', {
  noun: 'small enby/bird',
  etym: () => [_.du, _.wi],
  see: () => [_.nowi, _.duda],
})

export const duyuru = _.word('duyuru', {
  noun: 'front of the vagina',
  etym: () => [_.du, _.yuru],
})
