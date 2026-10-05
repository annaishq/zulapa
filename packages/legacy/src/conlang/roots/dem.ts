import * as _ from '../lang'

export const dem = _.word('dem', {
  def: 'when past',
  glo: 'when.PST',
  etym: () => [_.da, _.em],
  see: () => [_.emle, _.dir, _.prep],
  desc: () => `The place lived`,
})
