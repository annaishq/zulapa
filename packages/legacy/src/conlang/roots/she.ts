import * as _ from '../lang'

export const she = _.word('she', {
  noun: 'air',
  see: () => [_.to],
})

export const shero = _.word('shero', {
  noun: 'lung',
  etym: () => [_.she, _.ro],
})

export const sheropa = _.word('sheropa', {
  verb: 'to scream',
  etym: () => [_.shero, _.pa],
})

export const shegau = _.word('shegau', {
  verb: 'to smell',
  etym: () => [_.she, _.gau],
})

export const shena = _.word('shena', {
  noun: 'smell',
  etym: () => [_.she, _.na],
})
