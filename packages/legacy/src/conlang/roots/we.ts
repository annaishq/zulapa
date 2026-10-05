import * as _ from '../lang'

export const we = _.word('we', {
  adj: 'right',
  suff: 'right',
  see: () => [_.no, _.se, _.du],
})
