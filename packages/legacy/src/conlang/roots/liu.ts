import * as _ from '../lang'

export const liu = _.word('liu', {
  verb: 'to eat',
  etym: () => [_.li, _.u$],
})

export const goliu = _.word('goliu', {
  noun: 'to swallow',
  etym: () => [_.go, _.liu],
})
