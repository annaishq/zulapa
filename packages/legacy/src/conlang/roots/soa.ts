import * as _ from '../lang'

export const soa = _.word('soa', {
  noun: 'floor',
  see: () => [_.al],
})

export const lisoa = _.word('lisoa', {
  noun: 'table',
  etym: () => [_.lil, _.soa],
})

export const soaji = _.word('soaji', {
  noun: 'grass',
  etym: () => [_.soa, _.ji],
  see: () => [_.plants],
})

export const gosoa = _.word('gosoa', {
  noun: 'mountain',
  etym: () => [_.go, _.soa],
  see: () => [_.nature],
})
