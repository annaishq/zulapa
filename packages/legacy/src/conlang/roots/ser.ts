import * as _ from '../lang'

export const ser = _.word('ser', {
  noun: 'dot',
})

export const leiser = _.word('leiser', {
  noun: 'instant',
  etym: () => [_.lei, _.ser],
})
