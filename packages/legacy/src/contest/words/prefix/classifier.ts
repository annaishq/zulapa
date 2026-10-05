import { prefix } from '../../lang'

export const o = prefix('o', {
  noun: 'I',
  glo: '1SG',
  // makes a verb
  cla: 'verb',
})

export const i = prefix('i', {
  noun: 'you',
  glo: '2SG',
  // makes a verb
  cla: 'verb',
})

export const le = prefix('le', {
  adj: 'very',
  glo: 'ADJ',
  // makes an ajective
  cla: 'adj',
})

export const si = prefix('si', {
  def: 'as',
  glo: 'ADV',
  // makes an adverb
  cla: 'adv',
})

export const u = prefix('u', {
  noun: 'emptiness',
  // FIXME: we have a hack with 'INF' in getGlo...
  glo: 'INF',
  cla: 'noun', // we read the 'verb' value
})
