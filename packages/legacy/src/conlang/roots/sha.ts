import * as _ from '../lang'

export const shaH = _.word('sha', {
  id: 'shaH',
  noun: 'hip',
  see: () => [_.sha],
})

export const shasha = _.word('shasha', {
  noun: 'dance',
  verb: 'to dance',
  etym: () => [_.shaH, _.shaH],
})

// === alt
