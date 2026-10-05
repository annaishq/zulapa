import * as _ from '../lang'

export const thamalil = _.word('thamalil', {
  noun: 'little finger',
  etym: () => [_.thama, _.lil],
})

export const ajalil = _.word('ajalil', {
  noun: 'spark',
  pos: 'on top of me: 4 limbs and 1 genital (little finger)',
  etym: () => [_.aj, _.lil],
})

export const nelil = _.word('nelil', {
  noun: 'confusion',
  adj: 'insecure',
  verb: 'to confound',
  see: () => [_.ganes, _.nanes],
  etym: () => [_.ne, _.lil],
})

_.prefix('nalil', {
  id: 'na-lil',
  noun: 'small',
  glo: 'THING.**small**',
})
