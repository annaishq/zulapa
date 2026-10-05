import * as _ from '../lang'

export const nem = _.word('nem', {
  noun: 'death',
  verb: 'to die',
  adj: 'dead',
  see: () => [_.ru],
  etym: () => [_.ne, _.em],
})

export const nemek = _.word('nemek', {
  noun: 'war',
  verb: 'to kill',
  etym: () => [_.nem, _.ek],
})
