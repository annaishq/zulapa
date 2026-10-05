import * as _ from '../lang'
import { prefix, suffix } from '../zulapa'

//medium.com/zulapa/du-plaisir-des-conjugaisons-df444756dfc0

export const ire = suffix('ire', {
  noun: 'eventual future',
  glo: 'FUT.EVNT',
  see: () => [_.verbs],
})

export const iru = suffix('iru', {
  noun: 'distant future',
  glo: 'FUT.DIST',
  see: () => [_.verbs],
})

export const ira = suffix('ira', {
  noun: 'near future',
  glo: 'FUT.PROX',
  see: () => [_.verbs],
})

export const iri = suffix('iri', {
  noun: 'tomorrow',
  glo: 'CRAS',
  see: () => [_.verbs],
})

export const iro = suffix('iro', {
  noun: 'later today',
  glo: 'FUT.HOD',
  see: () => [_.verbs],
})

export const ir = prefix('ir', {
  noun: 'desire',
  verb: 'to desire',
  adj: 'under',
  ncla: 'noun',
  pref: 'under',
  glo: 'SUBESS',
  // as suffix
  suff: 'future',
  scla: 'verb',
  sglo: 'FUT',
  desc: () => `Also means 'future'.`,
  see: () => [_.verbs],
  exam: () => [_.phraseX('Come under me.', _.ir.odu.imp, _.mo.m)],
})

export const em = _.suffix('em', {
  noun: 'life',
  verb: 'to live',
  adj: 'alive',
  def: 'past',
  sglo: 'PST',
  see: () => [_.verbs],
})

export const emo = suffix('emo', {
  noun: 'earlier today',
  glo: 'PST.HOD',
  see: () => [_.verbs],
})

export const emi = suffix('emi', {
  noun: 'yesterday',
  glo: 'HEST',
  see: () => [_.verbs],
})

export const ema = suffix('ema', {
  noun: 'recent past',
  glo: 'PST.PROX',
  see: () => [_.verbs],
})

export const emu = suffix('emu', {
  noun: 'distant past',
  glo: 'PST.DIST',
  see: () => [_.verbs],
})

export const eme = suffix('eme', {
  noun: 'eventual past',
  glo: 'PST.EVNT',
  see: () => [_.verbs],
})

export const lau = suffix('lau', {
  adv: 'always',
  noun: 'eternity',
  glo: 'ETERN',
  sglo: 'ETERN',
  etym: () => [_.lei, _.au],
  desc: () => `The time loves.`,
  see: () => [_.verbs],
})

// on rename, change suffix/uki
export const lei = suffix('lei', {
  def: 'then',
  adv: 'now',
  noun: 'time',
  pref: 'time',
  sglo: 'NOW',
})

export const nei = suffix('nei', {
  adv: 'never',
  glo: 'NEVER',
  etym: () => [_.ne, _.lei],
})
