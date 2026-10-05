import * as _ from '../lang'

export const mi = _.word('mi', {
  noun: 'gentle hand',
  verb: 'to caress',
  etym: () => [_.ma, _.i$],
  see: () => [_.mado, _.mu],
  desc: () => `${_.phrase('Give me a hug.', _.mi, _.au)}`,
})
