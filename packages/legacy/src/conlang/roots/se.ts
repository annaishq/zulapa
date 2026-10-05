import * as _ from '../lang'

export const se = _.word('se', {
  adj: 'left',
  suff: 'left',
  pref: 'other',
  see: () => [_.du, _.we, _.no],
})
