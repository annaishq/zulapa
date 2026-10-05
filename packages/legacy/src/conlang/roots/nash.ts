import * as _ from '../lang'

export const nash = _.word('nash', {
  noun: 'cloud',
  verb: 'to shiver',
  adv: 'softly',
  desc: () => `The word softened with time from **naj** to **nash**.`,
  etym: () => [_.ne, _.aj],
})

export const nasho = _.word('nasho', {
  verb: 'to sigh',
  etym: () => [_.nash, _.o$],
})

export const nashlo = _.word('nashlo', {
  verb: 'to cum',
  noun: 'orgasm, rain',
  etym: () => [_.nash, _.lo],
})

export const nashapa = _.word('nashapa', {
  noun: 'fog',
  etym: () => [_.nash, _.pa],
})
