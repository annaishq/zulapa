import * as _ from '../lang'

export const eja = _.word('eja', {
  noun: 'plausible',
  verb: 'to be able',
  desc: () => 'Introduces an interogation',
  see: () => [_.neja],
  etym: () => [_.e, _.ja],
})

export const neja = _.word('neja', {
  noun: 'not possible',
  verb: 'to not be able',
  see: () => [_.eja],
  etym: () => [_.ne, _.ja],
})
