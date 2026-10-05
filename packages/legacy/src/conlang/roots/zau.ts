import * as _ from '../lang'

export const zau = _.word('zau', {
  noun: 'fire',
  verb: 'to burn',
  adj: 'consumed',
  adv: 'consuming',
  etym: () => [_.za, _.u$],
  see: () => [_.aj],
})

export const pizau = _.word('pizau', {
  noun: 'ego-burn',
  verb: 'to burn the ego',
  desc: () => `Initiation`,
  etym: () => [_.pi, _.ju],
  see: () => [_.dwiju],
})
