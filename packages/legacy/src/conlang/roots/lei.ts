import * as _ from '../lang'

export const gulei = _.word('gulei', {
  verb: 'to experience',
  noun: 'experience',
  etym: () => [_.gu, _.lei],
})

export const leiluki = _.word('leiluki', {
  noun: 'patience',
  adj: 'patient',
  etym: () => [_.lei, _.uki],
})

export const sauleiluki = _.word('sauleiluki', {
  noun: 'impatience',
  adj: 'impatient',
  etym: () => [_.sau, _.leiluki],
})
