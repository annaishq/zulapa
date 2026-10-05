import * as _ from '../lang'

export const xim = _.word('xim', {
  noun: 'growth',
  verb: 'to grow',
})

export const yuxim = _.word('yuxim', {
  noun: 'growing joy',
  verb: 'to birth',
  etym: () => [_.yu, _.xim],
  see: () => [_.gui],
})

export const maxim = _.word('maxim', {
  verb: 'to make', // to build
  desc: () => 'the hands make grow',
  see: () => [_.magi],
  etym: () => [_.ma, _.xim],
})

export const gaxim = _.word('gaxim', {
  noun: 'thought',
  verb: 'to think',
  etym: () => [_.ga, _.xim],
})

export const pixim = _.word('pixim', {
  verb: 'to unite',
  etym: () => [_.pi, _.xim.verb],
})

// === alt
