import * as _ from '../lang'

export const on = _.word('on', {
  noun: 'source',
  verb: 'to reveal',
})

export const lamon = _.word('lamon', {
  noun: 'urethra',
  etym: () => [_.lam, _.on],
})

export const yaon = _.word('yaon', {
  noun: 'dusk',
  etym: () => [_.ya, _.on],
})

export const yohon = _.word('yohon', {
  noun: 'dawn',
  etym: () => [_.yo, _.on],
})
