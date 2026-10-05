import * as _ from '../lang'

export const qer = _.word('qer', {
  noun: 'nail',
  verb: 'to scratch',
  adj: 'fierce',
  adv: 'fiercely',
})

export const qerbaj = _.word('kerbaj', {
  noun: 'hoof',
  desc: () => `Nail of the leg.`,
  etym: () => [_.qer, _.baj],
})
