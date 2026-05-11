import * as _ from '../lang'

export const the = _.word('the', {
  verb: 'to have',
  see: () => [_.wu],
})

export const sauthe = _.word('sauthe', {
  verb: 'to miss',
  etym: () => [_.sau, _.the],
})

export const su = _.word('su', {
  verb: 'to put',
})