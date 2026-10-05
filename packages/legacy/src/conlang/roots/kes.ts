import * as _ from '../lang'

export const kes = _.word('kes', {
  noun: 'blade',
  verb: 'to cut',
})

// it should mean 'pain' as well or 'fear of change', 'frozen change'...
export const kesegi = _.word('kesegi', {
  noun: 'pain',
  verb: 'to suffer',
  etym: () => [_.kes, _.egi],
})

export const kesu = _.word('kesu', {
  noun: 'to chisel',
  etym: () => [_.kes, _.u$],
})
