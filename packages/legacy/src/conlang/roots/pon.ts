import * as _ from '../lang'

export const pon = _.word('pon', {
  adj: 'orange (color)',
  see: () => [_.colors],
})

export const palapon = _.word('palapon', {
  noun: 'peach',
  adj: 'peachy',
  img: 'peach.jpg',
  see: () => [_.fruits],
  etym: () => [_.pal, _.pon],
})

export const pona = _.word('pona', {
  noun: 'orange, November',
  etym: () => [_.pon, _.na],
  see: () => [_.fruits, _.seasons],
})

export const ponale = _.word('ponale', {
  noun: 'tangerine, December',
  etym: () => [_.pona, _.lil],
  see: () => [_.fruits, _.seasons],
})
