import * as _ from '../lang'

export const nau = _.word('nau', {
  verb: 'to desire',
  desc: () => `Wanting something to become real (${_.na}).`,
  etym: () => [_.na, _.au],
})

export const naupa = _.word('naupa', {
  noun: 'longing',
  etym: () => [_.nau, _.pa],
})
