import * as _ from '../lang'

export const eri = _.word('eri', {
  noun: 'cherry (June)',
  adj: 'provocative',
  see: () => [_.fruits, _.colors, _.seasons],
})

export const muneri = _.word('muneri', {
  noun: 'nipple',
  etym: () => [_.mun, _.eri],
})

export const tajeri = _.word('tajeri', {
  noun: 'glans',
  etym: () => [_.taj, _.eri],
})

export const yineri = _.word('yineri', {
  noun: 'clitoris glans',
  see: () => [_.qeyin],
  etym: () => [_.yin, _.eri],
})
