import * as _ from '../lang'

export const fio = _.word('fio', {
  adj: 'eggplant (color)',
  see: () => [_.colors],
})

export const fiona = _.word('fiona', {
  noun: 'eggplant (vegetable)',
  etym: () => [_.fio, _.na],
})
