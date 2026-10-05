import * as _ from '../lang'

export const ru = _.word('ru', {
  verb: 'to emerge',
  noun: 'creation (Sristi)',
  suff: 'become',
  def: 'into',
  see: () => [_.nem, _.prep],
})

export const ruP = _.word('ru', {
  def: 'into',
  glo: 'ILLAT',
  id: 'ruP',
})

export const runa = _.word('runa', {
  noun: 'emergence (Krtya कृत्य)',
  etym: () => [_.ru, _.na],
})

export const leiru = _.word('leiru', {
  noun: 'destiny',
  etym: () => [_.lei, _.ru],
})

export const leirui = _.word('leirui', {
  noun: 'fortune',
  etym: () => [_.leiru, _.i$],
})

export const leiruo = _.word('leiruo', {
  noun: 'misfortune',
  adj: 'alas',
  etym: () => [_.leiru, _.o$],
})

export const kuru = _.word('kuru', {
  verb: 'to must',
  etym: () => [_.qu, _.ru],
})

export const nuru = _.word('nuru', {
  noun: 'apophenia',
  etym: () => [_.nux, _.ru],
  see: () => [_.conrad, _.guru],
  desc: () => `
Apophenia is the perception of or belief in connectedness among unrelated
phenomena (concept from psychologist Klaus Conrad).

In zulapa, this litteraly means "the emergence of hubris".
`,
})

// === alt
