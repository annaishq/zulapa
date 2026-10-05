import * as _ from '../lang'

export const ko = _.prefix('ko', {
  adv: 'with',
  glo: 'COM',
  see: () => [_.prep, _.sau],
})

export const koi = _.word('koi', {
  noun: 'salutation',
  etym: () => [_.ko, _.i],
})
