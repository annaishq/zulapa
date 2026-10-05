import * as _ from '../lang'

export const don = _.word('don', {
  def: 'where,what,who',
  noun: 'unknown',
  adj: 'unknown',
  verb: 'to exist',
  glo: 'what',
  desc: () =>
    `This root is a generic way of creating an absence and thus a direction (look at derived terms).`,
})

export const dono = _.word('dono', {
  def: 'where (body)',
  glo: 'where.body',
  see: () => [_.prep],
  etym: () => [_.don, _.oda],
  desc: () => `This means "at the heart of".`,
})

export const done = _.word('done', {
  def: 'where (place)',
  glo: 'where.place',
  etym: () => [_.don, _.eda],
  see: () => [_.prep],
})

export const dona = _.word('dona', {
  def: 'who (other)',
  glo: 'who',
  etym: () => [_.don, _.ada],
  see: () => [_.prep],
})

_.word('ledon', {
  id: 'le-don',
  adj: 'unknown',
  glo: 'ADJ.**unknown**',
})
