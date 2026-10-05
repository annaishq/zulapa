import * as _ from '../lang'

export const us = _.word('us', {
  noun: 'coral',
  adj: 'slow',
  adv: 'slowly',
})

export const gahilus = _.word('gahilus', {
  noun: 'intuition',
  verb: 'to dream',
  etym: () => [_.gaxim.verb, _.us.adv],
  see: () => [_.fenus, _.palus],
})
