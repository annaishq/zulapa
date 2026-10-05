import * as _ from '../roots'
import { alt, suffix, word } from '../zulapa'

export const pa = suffix('pa', {
  noun: 'all',
  suff: 'mystery',
  glo: 'ALL',
  see: () => [_.fi],
})

export const papa = word('papa', {
  adj: 'harmony',
  desc: () => 'everything is in all things',
  etym: () => [pa, pa],
})

export const paM = alt('pa', {
  id: 'paM',
  suff: 'mystery',
  glo: 'MYST',
  alt: () => pa,
})
