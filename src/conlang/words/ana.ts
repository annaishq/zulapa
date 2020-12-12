import * as _ from '.'

export const ana = _.word('ana', {
  noun: 'arbre',
  adj: 'féminin',
})
_.see(_.oto)

export const anawi = _.word('anawi', {
  noun: 'meduse',
  etym: () => [_.ana, _.awi],
})

export const anoda = _.word('anoda', {
  noun: 'femme',
})
_.see(_.duna)

export const anoto = _.word('anoto', {
  noun: 'femme-homme',
})

export const aniwi = _.word('aniwi', {
  noun: 'femme-enby',
})