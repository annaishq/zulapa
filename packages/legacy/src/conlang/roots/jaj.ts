import * as _ from '../lang'

export const jaj = _.word('jaj', {
  noun: 'threshold',
  adj: 'liminal',
})

export const jaja = _.word('jaja', {
  noun: 'door',
  verb: 'to cross',
  etym: () => [_.jaj, _.na],
})
