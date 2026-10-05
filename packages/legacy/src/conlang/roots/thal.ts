import * as _ from '../lang'

export const thal = _.word('thal', {
  adj: 'from the sky',
  glo: '*from the sky*',
})

export const mathal = _.word('mathal', {
  noun: 'divine action',
  adj: 'miraculous',
  etym: () => [_.ma, _.thal],
})
