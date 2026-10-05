import * as _ from '../lang'

export const eshu = _.word('eshu', {
  verb: 'to loose',
  adj: 'lost',
  desc: () => `
${_.phrase('I got lost', _.es.o.eshu.em)}`,
})

export const eshubeo = _.word('eshubeo', {
  noun: 'monster',
})
