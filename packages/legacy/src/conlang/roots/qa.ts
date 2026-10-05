import * as _ from '../lang'

export const qa = _.word('qa', {
  noun: '4 / singularity',
  suff: 'singular',
  glo: 'SINGULAR',
  pos: 'on all fours',
  desc: () => 'That which cannot be thought or put into words.',
  see: () => [_.count],
})

export const qapa = _.word('qapa', {
  noun: 'everything',
  etym: () => [_.qa, _.pa],
})

export const qada = _.word('qada', {
  noun: 'everybody',
})

export const thamaqa = _.word('thamaqa', {
  noun: 'ring finger (4th finger)',
  pos: 'on all fours',
  desc: () =>
    'The position is indicated by putting the thumb on the ring finger.',
  etym: () => [_.thama, _.qa4],
})

export const neqa = _.word('neqa', {
  noun: 'shame',
  adj: 'restless',
  etym: () => [_.ne, _.qa],
  desc: () => `
  ${_.neqa} is the veil within, ${_.xusona}.
  `,
  see: () => [_.ganes, _.nanes, _.xusona],
})

export const qaru = _.word('qaru', {
  verb: 'to choose',
  desc: () => 'The realization of the singular in onself.',
  etym: () => [_.qa, _.ru],
})

// Cow pose
export const qoda = _.word('qoda', {
  noun: 'cow',
  etym: () => [_.qa, _.oda],
})

export const qafi = _.word('qafi', {
  noun: 'journey',
  adj: 'precious',
  etym: () => [_.qa, _.fi],
  see: () => [_.gufi, _.gufishany],
})

export const qalaj = _.word('qalaj', {
  noun: 'somebody',
  etym: () => [_.qa, _.aj],
  desc: () => `
  Being a ignited mystery, a sexual person with power to provoque changes to the world.
  `,
  see: () => [_.qalei],
})

export const qalei = _.word('qalei', {
  noun: 'puberty',
  etym: () => [_.qa, _.lei],
  desc: () => `
  Becoming unknown, singular.
  `,
})
