import { suffix } from '../make'
import * as _ from '../words'

export const m = suffix('m', {
  adj: 'pleasant',
  writ: 'ం',
  suff: 'taste marking',
  glo: 'NICE',
  force: 'noun',
  maxPhrases: 10,
  see: () => [_.n, _.h],
  desc: () => `Oxytocin (taste marking)[${_.taste.id}]`,
})
