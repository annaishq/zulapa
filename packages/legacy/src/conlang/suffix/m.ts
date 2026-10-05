import * as _ from '../lang'
import { suffix } from '../zulapa'

export const m = suffix('m', {
  def: 'accusative',
  writ: 'ం',
  glo: 'ACC',
  cla: 'noun',
  scla: 'noun',
  maxPhrases: 10,
  see: () => [_.acc, _.sub],
})
