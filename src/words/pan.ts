import * as _ from '.'

export const pan = _.word('pan', {
  noun: 'rouge',
})

export const dupan = _.word('dudapan', {
  noun: 'renard',
  derived: [_.duda, _.pan],
})
