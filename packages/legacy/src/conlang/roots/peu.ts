import * as _ from '../lang'

export const peu = _.word('peu', {
  noun: 'fear',
  verb: 'to fear',
  desc: () => `Refusing change: ${_.negu}.`,
  see: () => [_.piu],
})

export const agupeu = _.word('agupeu', {
  noun: 'boldness',
  etym: () => [_.agu, _.peu],
})

// === alt
