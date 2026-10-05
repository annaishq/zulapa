import * as _ from '../lang'

export const meo = _.word('meo', {
  noun: 'perl',
  adv: 'too',
  adj: 'same',
})

export const nemeo = _.word('nemeo', {
  noun: 'difference',
  adj: 'different',
  etym: () => [_.ne, _.meo],
})
