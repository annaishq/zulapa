import * as _ from '../lang'

export const mun = _.word('mun', {
  noun: 'breast',
  pos: 'kneeling, breast touching the ground (doggy style)',
  see: () => [_.pe],
  exam: () => [_.phraseX('Carress your breast.', _.mi.imp, _.ti.mun.m)],
})

export const munwe = _.word('munwe', {
  noun: 'right breast',
  etym: () => [_.mun, _.we],
})

export const hamun = _.word('hamun', {
  noun: 'nipple',
  etym: () => [_.tha, _.mun],
})

export const munawi = _.word('munawi', {
  noun: 'moon',
  pos: 'standing, back arched, hands joined by the buttocks',
  etym: () => [_.mun, _.awi],
})

export const muna = _.word('muna', {
  noun: 'baby bottle',
  etym: () => [_.mun, _.na],
})
