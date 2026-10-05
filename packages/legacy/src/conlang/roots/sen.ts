import * as _ from '../lang'

export const sen = _.word('sen', {
  noun: 'here',
  verb: 'to come',
  see: () => [_.da, _.odu],
})

export const gasen = _.word('gasen', {
  verb: 'to summon',
  etym: () => [_.ga, _.sen],
})

export const senu = _.word('senu', {
  verb: 'to call',
  etym: () => [_.sen, _.u$],
})
