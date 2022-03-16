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
  etym: () => [_.ha, _.baj],
})

export const kebaj = _.word('kebaj', {
  noun: 'testicles',
  etym: () => [_.ke, _.baj],
})