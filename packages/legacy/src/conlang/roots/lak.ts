import * as _ from '../lang'

export const lak = _.word('lak', {
  noun: 'food',
  verb: 'to share',
})

export const lakshan = _.word('lakshan', {
  noun: 'mess',
  verb: 'to disturb',
  desc: () => `Portion of food.`,
  etym: () => [_.lak, _.shan],
})

export const guwulak = _.word('guwulak', {
  verb: 'to feed',
  etym: () => [_.guwu, _.lak],
})
