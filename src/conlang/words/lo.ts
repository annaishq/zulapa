import * as _ from '.'

export const loru = _.word('loru', {
  verb: 'to submit, to become small',
  adj: 'humilité',
  etym: () => [_.lo, _.ru],
})

// === alt

export const loV = _.alt('lo', {
  glo: '**surrender**',
  alt: () => _.lo,
})
