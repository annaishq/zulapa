import * as _ from '.'

export const yusa = _.word('yusa', {
  noun: 'room',
})

export const ajayusa = _.word('ajayusa', {
  noun: 'radiator',
  etym: () => [_.aj, _.yusa],
})
