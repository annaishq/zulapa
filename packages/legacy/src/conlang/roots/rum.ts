import * as _ from '../lang'

export const rum = _.word('rum', {
  noun: 'arm',
  see: () => [_.baj],
})

export const harum = _.word('harum', {
  noun: 'forearm',
})

export const djorum = _.word('djorum', {
  noun: 'upper arm',
})

export const rumi = _.word('rumi', {
  verb: 'to hug',
})

export const leirumi = _.word('leirumi', {
  verb: 'to embrace time',
  desc: () => `To live one's life`,
  see: () => [_.em],
})

export const rumo = _.word('rumo', {
  verb: 'to throw',
  etym: () => [_.rum, _.o$],
})

export const qurum = _.word('qurum', {
  adj: 'contained',
  etym: () => [_.qu.noun, _.rum],
})
