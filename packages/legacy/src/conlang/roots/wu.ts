import * as _ from '../lang'

export const diwu = _.word('diwu', {
  def: 'who owns, of',
  see: () => [_.prep],
  exam: () => [
    _.phraseX('The breasts of Iri.', _.mun.wu, _.Iris),
    _.phraseX('Iris, her breasts.', _.Iris, _.diwu, _.mun),
  ],
})

export const fawulama = _.word('fawulama', {
  noun: 'fish',
  etym: () => [_.fa, _.wu, _.lama],
  see: () => [_.awi],
})
