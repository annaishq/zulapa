import * as _ from '../lang'

export const bu = _.word('bu', {
  noun: 'sponge',
  pref: 'erectile body',
})

export const buyon = _.word('buyon', {
  noun: 'erectile part of the vulva',
  etym: () => [_.bu, _.yin],
  see: () => [_.butaj, _.yineri],
  desc: () => `
This is the cavernous body of the "big clitoris" (you know, this 3D printed shape).

It grows during arousal, like a sponge filled with love.
`,
})

export const butaj = _.word('butaj', {
  noun: 'erectile part of the penis',
  etym: () => [_.bu, _.taj],
  see: () => [_.buyon, _.tajeri],
  desc: () => `Cavernous body.`,
})
