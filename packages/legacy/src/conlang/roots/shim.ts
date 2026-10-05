import * as _ from '../lang'

// Abi
export const shim = _.word('shim', {
  verb: 'to join',
  adv: 'together',
  adj: 'together',
  noun: 'together',
})

export const odashim = _.word('odashim', {
  noun: 'kinship',
})

export const unushim = _.word('unushim', {
  noun: 'sisterhood',
  etym: () => [_.nu, _.shim],
})

export const noashim = _.word('noashim', {
  noun: 'skinship',
  etym: () => [_.noa, _.shim],
})
