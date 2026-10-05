import * as _ from '../lang'

// Cat pose, quatre pattes, dos arondi
export const gili = _.word('gili', {
  noun: 'tiger',
})

export const gilil = _.word('gilile', {
  noun: 'cat',
  etym: () => [_.gili, _.lil],
})
