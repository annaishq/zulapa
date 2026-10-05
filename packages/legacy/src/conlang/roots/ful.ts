import * as _ from '../lang'

export const ful = _.word('ful', {
  noun: 'neck',
})

export const fulufi = _.word('fulufi', {
  noun: 'necklace',
  etym: () => [_.ful, _.fi],
})
