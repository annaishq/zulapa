import * as _ from '../lang'

export const odo = _.word('odo', {
  verb: 'to leave',
  etym: () => [_.oda, _.o$],
  see: () => [_.odu, _.dau],
})

export const odogi = _.word('odogi', {
  noun: 'goodbye',
  desc: () => `Saying goodbye is making leaving sweet.`,
  see: () => [_.nomy],
  etym: () => [_.odo, _.gi],
})
