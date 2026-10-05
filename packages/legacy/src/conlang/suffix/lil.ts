import { suffix } from '../zulapa'
import * as _ from '../lang'

export const lil = suffix('lil', {
  adj: 'small',
  adv: 'carefully',
  noun: '5',
  glo: 'DIM',
  see: () => [_.count],
})
