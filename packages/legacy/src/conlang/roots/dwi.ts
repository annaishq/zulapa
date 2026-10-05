import * as _ from '../lang'

export const dwi = _.word('dwi', {
  noun: 'bird',
  see: () => [_.wi],
})

export const dwilu = _.word('dwilu', {
  verb: 'to fly',
  etym: () => [_.dwi, _.u$],
})

export const dwiju = _.word('dwiju', {
  noun: 'phoenix',
  etym: () => [_.dwi, _.ju],
})

// === alt
