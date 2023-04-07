import * as _ from '../lang'
import { alt, prefix } from '../zulapa'

export const fu = prefix('fu', {
  def: 'by',
  noun: 'monkey',
  pref: 'by/does',
  glo: 'ERG',
  desc: () => `By (person): ergative case (ERG).`,
  scla: 'noun',
  join: '',
})

export const difu = _.word('difu', {
  def: 'who',
  see: () => [_.prep],
})

export const ju = prefix('ju', {
  def: 'before',
  noun: 'start',
  verb: 'to begin',
  glo: 'ANTE',
  desc: () => `Before, in front of: antessive case (ANTESS).`,
  forcedGlo: false,
  etym: () => [_.jo, _.ru],
  see: () => [_.hu],
})

export const juV = alt('ju', {
  id: 'juV',
  verb: 'to begin',
  alt: () => _.ju,
})

export const hu = prefix('hu', {
  def: 'after',
  noun: 'smoke',
  adj: 'limited',
  verb: 'to finish',
  glo: 'POSTE',
  desc: () => `After, behind: postessive case (POSTE).`,
  etym: () => [_.ha, _.ru],
  see: () => [_.ju],
})

export const huN = _.alt('hu', {
  id: 'huN',
  noun: 'smoke',
  glo: '**smoke**',
  cla: 'noun',
  alt: () => _.hu,
})

export const ni = prefix('ni', {
  def: 'to',
  noun: 'arrow',
  pref: 'to',
  glo: 'DAT',
  desc: () => `To this person: dative case (DAT).`,
  scla: 'noun',
})

export const le = prefix('le', {
  adj: 'very',
  glo: 'ADJ',
  cla: 'adj',
  desc: () => `
  Adjective marker for nouns (ADJ). Can also be used on adjectives to stress their importance.

  ${_.phrase('A very lost friend.', _.adu, _.le.eshu)}
  `,
})

export const si = prefix('si', {
  adv: 'as',
  glo: 'ADV',
  cla: 'adv',
  desc: () => `Adverb marker (ADV).`,
})

export const ne = prefix('ne', {
  def: 'negation',
  glo: 'NEG',
  desc: () => 'Negation (NEG).',
  see: () => [_.sau],
})

export const sau = prefix('sau', {
  def: 'without',
  glo: 'ABESS',
  desc: () => 'Without: abessive case (ABESS).',
  see: () => [_.ko, _.ne, _.prep],
})

export const fe = prefix('fe', {
  def: 'on',
  verb: 'to cover',
  glo: 'SUPESS',
  cla: 'noun',
  desc: () => 'On top of: superessive case (SUPESS).',
  exam: () => [_.phrase('I like your nakedness.', _.o.zu, _.nefe.es.ti)],
})

export const ro = prefix('ro', {
  adj: 'inner',
  suff: 'in (INESS)',
  pref: 'inner',
  glo: 'INESS',
  desc: () => 'In, into: inessive case (INESS).',
  see: () => [_.ri, _.prep],
})

export const ri = prefix('ri', {
  adj: 'outer',
  pref: 'outer',
  suff: 'out of (ELAT)',
  glo: 'ELAT',
  desc: () => 'ELAT: Elative case (out, out of)',
  see: () => [_.ro, _.prep],
})

export const kte = prefix('kte', {
  adj: 'between',
  pref: 'between',
  glo: 'BETWEEN',
  see: () => [_.prep],
})

// yi, lo, kei
export const kei = prefix('kei', {
  // First item must be 'def' to pass class through
  def: 'honorific',
  noun: 'Master',
  adj: 'fantastic',
  suff: 'fantastic',
  glo: 'HON',
  desc: () => `HON: Honorific mode.`,
})

// part of subject => prefix and suffix
export const lo = prefix('lo', {
  noun: 'submissive',
  suff: 'submissive',
  adj: 'wet',
  adv: 'gently',
  glo: 'WET',
  verb: 'to surrender',
  desc: () => `
  ${_.phraseX(
    'Wet submissive, I might whip you delicately some today.',
    _.ti.lo.m,
    _.o.fo.ire,
    _.si.enu
  )}
  `,
  see: () => [_.miu, _.gi],
})

prefix('silo', {
  id: 'si-lo',
  adv: 'genlty',
  glo: 'ADV.*gently*',
})

// part of subject => prefix and suffix
export const yi = prefix('yi', {
  noun: 'tiny',
  suff: 'tiny',
  adj: 'tiny',
  glo: 'TINY',
  desc: () => `Innocence`,
})

export const ye = prefix('ye', {
  noun: 'SUP',
  suff: 'SUP',
  adj: 'great',
  glo: 'SUP',
  desc: () => 'SUP: Superlative, yeah mode.',
})
