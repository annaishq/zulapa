import * as _ from '../lang'

export const xos = _.word('xos', {
  noun: 'gap, trust',
  verb: 'to split',
  adj: 'wide open',
  adv: 'trustingly',
})

export const xosegi = _.word('xosegi', {
  noun: 'despair',
  etym: () => [_.xos, _.egi],
})

export const shexos = _.word('shexos', {
  adj: 'surprised',
  noun: 'surprise',
  etym: () => [_.she, _.xos],
})
