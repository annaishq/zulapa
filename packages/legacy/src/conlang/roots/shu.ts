import * as _ from '../lang'

export const shu = _.word('shu', {
  def: 'and',
  see: () => [_.prep],
})

export const neshu = _.word('neshu', {
  def: 'but',
  see: () => [_.prep],
  etym: () => [_.ne, _.shu],
})

export const shun = _.word('shun', {
  def: 'even',
  see: () => [_.prep],
  etym: () => [_.shu, _.n],
})
