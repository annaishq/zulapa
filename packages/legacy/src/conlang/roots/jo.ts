import * as _ from '../lang'

export const jo = _.word('jo', {
  noun: 'near',
  adj: 'proximal',
  desc: () => 'Towards oneself.',
  etym: () => [_.dau, _.ojo],
  see: () => [_.tha],
})

export const jona = _.word('jona', {
  noun: 'intimacy',
  etym: () => [_.jo, _.na],
})

export const hajo = _.word('hajo', {
  verb: 'to take',
  etym: () => [_.tha, _.jo],
})

export const joha = _.word('joha', {
  verb: 'to reject',
  etym: () => [_.jo, _.tha],
})

export const muhajo = _.word('muhajo', {
  verb: 'to pick up',
  etym: () => [_.mu, _.hajo],
})

export const joda = _.word('joda', {
  noun: 'child',
  etym: () => [_.jo.adj, _.oda],
  see: () => [_.family],
})

export const jonu = _.word('jonu', {
  noun: 'daughter',
  desc: () => `We also use: ${_.linkAndGlo(_.nu.lil)}`,
  etym: () => [_.jo, _.nu],
  see: () => [_.family],
})

export const jowi = _.word('jowi', {
  noun: 'enby child',
  etym: () => [_.jo, _.wi],
  see: () => [_.family],
})

export const joto = _.word('joto', {
  noun: 'son',
  etym: () => [_.jo, _.to],
  see: () => [_.family],
})
