import * as _ from '../lang'

export const odu = _.word('odu', {
  verb: 'to come',
  etym: () => [_.oda, _.u$],
  see: () => [_.odo, _.dao],
  exam: () => [_.phrase('Where do you come from ?', _.dao, _.i.odu, _.q)],
})
