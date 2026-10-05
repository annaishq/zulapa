import * as _ from '../lang'

export const ij = _.word('ij', {
  noun: 'they',
  glo: 'PREV',
  desc: () =>
    `Express a reference to a previously mentioned noun or group of nouns.`,
})

export const tij = _.suffix('tij', {
  noun: 'they (previous)',
  cla: 'noun',
  glo: 'POSS.**they.PREV**',
})
