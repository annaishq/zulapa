import * as _ from '../lang'

export const ipi = _.word('ipi', {
  noun: 'memory (10)',
  see: () => [_.count],
})
