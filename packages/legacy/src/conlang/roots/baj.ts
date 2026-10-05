import * as _ from '../lang'

export const baj = _.word('baj', {
  noun: 'lower limb',
  see: () => [_.rum],
})

export const jobaj = _.word('jobaj', {
  noun: 'thigh',
  etym: () => [_.jo, _.baj],
})

export const habaj = _.word('habaj', {
  noun: 'leg',
  etym: () => [_.tha, _.baj],
})

export const qebaj = _.word('qebaj', {
  noun: 'testicles',
  etym: () => [_.qe, _.baj],
})

export const qabaj = _.word('qabaj', {
  noun: 'animal',
  etym: () => [_.qa4, _.baj],
})
