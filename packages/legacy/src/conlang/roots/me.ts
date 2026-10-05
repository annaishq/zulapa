import * as _ from '../lang'

export const me = _.word('me', {
  verb: 'to move',
  pref: 'to move into',
})

export const meshe = _.word('meshe', {
  verb: 'to fly',
  etym: () => [_.me, _.she],
})

export const melam = _.word('melam', {
  verb: 'to swim',
  etym: () => [_.me, _.lam],
})

export const meny = _.word('meny', {
  noun: 'dance',
  verb: 'to dance',
  desc: () => `To move like drawing`,
  etym: () => [_.me, _.y$],
})
