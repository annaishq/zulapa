import * as _ from '../lang'

export const lat = _.word('lat', {
  adj: 'wild',
})

export const nilat = _.word('nilat', {
  verb: 'to hunt',
  adj: 'hunted',
  etym: () => [_.ni.noun, _.lat],
})

export const latek = _.word('latek', {
  adj: 'tammed',
  etym: () => [_.lat, _.ek],
})
