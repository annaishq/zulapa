import * as _ from '../lang'

export const fi = _.word('fi', {
  noun: 'thread',
  verb: 'to connect',
  see: () => [_.pa],
})

export const fishany = _.word('fishany', {
  verb: 'to sew',
  etym: () => [_.fi, _.meny],
})

export const gufishany = _.word('gufishany', {
  verb: 'to sew life, connect things out of causal time',
  etym: () => [_.gufi, _.meny],
})

export const gufi = _.word('gufi', {
  noun: 'wisdom',
  desc: () =>
    `Connection between experiences, a lived knowledge, wisdom. A particular knitting of this thread is ${_.qafi}. Wisdom is always located and limited. It is a locus.`,
  see: () => [_.qafi],
  etym: () => [_.gu, _.fi],
})

// === alt
