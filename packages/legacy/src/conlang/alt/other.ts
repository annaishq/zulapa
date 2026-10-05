import * as _ from '../lang'

export const loV = _.alt('lo', {
  glo: 'surrender',
  alt: () => _.lo,
})

export const $dot = _.word('.', {
  noun: '.',
  glo: '',
})

export const $excl = _.word('!', {
  noun: '!',
  glo: '',
})

export const $comma = _.word(',', {
  noun: ',',
  glo: '',
})

export const $cap = _.prefix('', {
  id: '$cap',
  noun: '',
  glo: '',
  op: 'capitalize',
})

export const $ = $dot
export const __ = $cap
export const _c = $comma
