import * as _ from '../lang'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to hold',
  exam: () => [
    _.phraseX(`Wank my vulva gently.`, _.ma.imp, _.si.lo, _.yin.m),
    _.phraseX(`Wank my penis intensely.`, _.ma.do, _.taj.m),
    _.phraseX('Drop (your) panties.', _.ne.ma.imp, _.feyin.m),
  ],
})

export const mapa = _.word('mapa', {
  noun: 'to search',
  etym: () => [_.ma, _.pa],
})

// Marina
export const my = _.word('my', {
  noun: 'trace',
  verb: 'to draw',
  img: 'marina_drawing.jpeg',
  desc: () =>
    `
From my encounter with Marina in Amsterdam. I decided to finally add the /j/ as
a vowel because I love the sound in slavic languages. The drawing is from her.

© Marina Shepelska [@imaginary_marina](https://instagram.com/imaginary_marina)
`,
  img_opa: '0.3',
  etym: () => [_.ma, _.y],
})

export const thama = _.word('thama', {
  noun: 'finger',
  etym: () => [_.tha, _.ma],
})

export const joma = _.word('joma', {
  noun: 'wrist',
  etym: () => [_.jo, _.ma],
})

export const mu = _.word('mu', {
  verb: 'to pull',
  adj: 'exhausted',
  etym: () => [_.ma, _.u$],
  see: () => [_.mi, _.mado],
})

export const malam = _.word('malam', {
  noun: 'parturient',
  etym: () => [_.ma, _.lam],
})

// sur les fesses, les jambes font les ailes du papillon, les pieds ensemble
export const miwi = _.word('miwi', {
  noun: 'butterfly',
  etym: () => [_.mi, _.wi],
})

export const masa = _.word('masa', {
  noun: 'shovel',
  etym: () => [_.ma, _.sax],
})

export const masali = _.word('masali', {
  noun: 'spoon',
  etym: () => [_.masa, _.lil],
})

export const masalili = _.word('masalili', {
  noun: 'little spoon',
  etym: () => [_.masali, _.lil],
})
