import * as _ from '../words'
import { prefix, suffix } from '../zulapa'

export const wu = suffix('wu', {
  noun: 'emptiness',
  verb: 'to owe',
  suff: 'of',
  glo: 'OF',
  see: () => [_.thu],
})

prefix('Iwu', {
  id: '$cap-i-wu',
  glo: 'you.**owe**',
  cla: 'verb',
})
