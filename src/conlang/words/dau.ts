import * as _ from '.'

export const dau = _.word('dau', {
  noun: 'to',
  glo: 'to.LOC',
  etym: () => [_.da, _.u],
  see: () => [_.odo, _.dao, _.prep],
})

export const hadau = _.word('hadau', {
  noun: 'far away',
  etym: () => [_.ha, _.dau],
})