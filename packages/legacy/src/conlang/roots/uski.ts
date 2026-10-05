import * as _ from '../lang'

export const uski = _.word('uski', {
  noun: 'muscle',
  adj: 'muscular',
})

export const gohuski = _.word('gohuski', {
  noun: 'power',
  etym: () => [_.go, _.uski],
})
