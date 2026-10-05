import * as _ from '../lang'

export const pan = _.word('pan', {
  noun: 'God of nature',
  adj: 'red',
  see: () => [_.colors, _.gods],
})

// à quatre pattes, on étire une jambe derrière soi
export const dupan = _.word('dudapan', {
  noun: 'fox',
  etym: () => [_.kadu, _.pan],
})
