import * as _ from '../lang'

export const yo = _.word('yo', {
  noun: 'daytime',
  see: () => [_.ya],
})

export const yogi = _.word('yogi', {
  noun: 'good morning',
  desc: () => `Sweet daytime.`,
  etym: () => [_.yo, _.gi],
  see: () => [_.yagi],
})

export const yohonagi = _.word('yohonagi', {
  noun: 'good evening',
  desc: () => `Sweet dawn.`,
  etym: () => [_.yohon, _.gi],
})

export const teyo = _.word('teyo', {
  noun: 'today',
  see: () => [_.sij, _.yo],
})

export const peyo = _.word('peyo', {
  noun: 'someday',
  etym: () => [_.pe, _.yo],
})

export const lirayo = _.word('lirayo', {
  noun: 'tomorrow',
  desc: () => `${_.iri.yo}`,
  etym: () => [_.iri, _.yo],
})

export const lemayo = _.word('lemayo', {
  noun: 'yesterday',
  desc: () => `${_.emi.yo}`,
  etym: () => [_.emi, _.yo],
})
