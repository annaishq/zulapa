import * as _ from '../lang'

export const qu = _.word('qu', {
  def: 'imply',
  noun: 'rope',
  verb: 'to tie',
  adj: 'tied',
  desc: () => `Causality`,
})

export const qude = _.word('qude', {
  noun: 'knot',
  verb: 'to make love',
  etym: () => [_.qu.noun, _.de],
})

export const nequ = _.word('nequ', {
  verb: 'to lose',
})

export const qupa = _.word('qupa', {
  noun: 'addiction',
  verb: 'to crave',
  desc: () => `
Tie everything, transactional relation to the world. Opposed to ${_.gupi} or ${_.aupa}.

See ${_.qulei}.
`,
  see: () => [_.qulei],
  etym: () => [_.qu, _.pa],
})

export const loqu = _.word('loqu', {
  verb: 'to allow',
  etym: () => [_.lo, _.qu],
})

export const nequpa = _.word('nequpa', {
  verb: 'to let go',
  etym: () => [_.ne, _.qupa],
  desc: () => `To not attach to everything.`,
})

export const qulei = _.word('qulei', {
  noun: 'causal time',
  verb: 'to rig',
  desc: () =>
    `To tie time, manipulate, transactional relation to time (if-then).`,
  etym: () => [_.qu, _.lei],
})

export const quloda = _.word('quloda', {
  noun: 'victime-bourreau-sauveu.se.r',
  desc: () => `Corps attaché.`,
  etym: () => [_.qu, _.oda],
})
