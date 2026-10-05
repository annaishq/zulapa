import { suffix } from '../zulapa'
import * as _ from '../lang'

export const gi = suffix('gi', {
  adj: 'kind',
  noun: 'permanence (Sthiti)',
  etym: () => [_.gu, _.i$],
  see: () => [_.go],
})

export const magi = _.word('magi', {
  verb: 'to preserve',
  see: () => [_.maxim],
  etym: () => [_.ma, _.gi],
})
