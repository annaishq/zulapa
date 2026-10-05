import { suffix } from '../zulapa'
import * as _ from '../lang'

export const uki = suffix('uki', {
  adj: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.ji.uki, _.baj.uki)}`,
})

export const ukilei = suffix('ukilei', {
  noun: 'elder',
  adj: 'old',
  etym: () => [_.uki, _.lei],
})
