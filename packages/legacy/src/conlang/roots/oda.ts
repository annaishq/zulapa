import * as _ from '../lang'

export const oda = _.word('oda', {
  noun: 'body',
  etym: () => [_.o, _.da],
})

export const xida = _.word('xida', {
  noun: 'sibling',
  etym: () => [_.xim, _.oda],
  see: () => [_.family],
})

export const xinu = _.word('xinu', {
  noun: 'sister',
  etym: () => [_.xim, _.nu],
  see: () => [_.family],
})
export const xiwi = _.word('xiwi', {
  noun: 'enby sibling',
  etym: () => [_.xim, _.wi],
  see: () => [_.family],
})
export const xito = _.word('xito', {
  noun: 'brother',
  etym: () => [_.xim, _.to],
  see: () => [_.family],
})
