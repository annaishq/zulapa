import * as _ from '../lang'

export const fodi = _.word('fodi', {
  img: 'sleep.jpg',
  img_opa: '0.7',
  noun: 'sleep',
  verb: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  verb: 'to fall asleep',
  etym: () => [_.fodi, _.ru],
})
