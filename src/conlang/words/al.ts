import * as _ from '.'

export const al = _.word('al', {
  noun: 'ciel',
  prefix: 'en haut, vers le ciel ou la tête',
})
_.see(_.soa)

export const alayin = _.word('alayin', {
  noun: 'haut du vagin',
  etym: () => [_.du, _.al, _.yin],
})

export const dualayin = _.word('dualayin', {
  noun: 'point G',
  etym: () => [_.du, _.alayin],
})

export const dalayin = _.word('dalayin', {
  noun: 'point G (version courte)',
  etym: () => [_.dualayin],
})