import * as _ from '../lang'

export const de = _.word('de', {
  def: 'two',
  pos: 'On the back *two* legs wide open.',
  see: () => [_.count],
})

export const dena = _.word('dena', {
  noun: 'half',
  etym: () => [_.de, _.na],
})

export const thamade = _.word('thamade', {
  noun: 'index finger',
  etym: () => [_.thama, _.de],
  pos: 'On the back two legs wide open (indicated by forming a v with thumb and index finger)',
})

export const nede = _.word('nede', {
  noun: 'anguish',
  adj: 'fighting',
  desc: () => 'life with time (anxiety, few memories)',
  see: () => [_.ganes, _.nanes],
})
