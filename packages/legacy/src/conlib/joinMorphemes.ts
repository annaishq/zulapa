import {
  BaseEntry,
  ENDS_k,
  ENDS_l,
  ENDS_t,
  ENDS_VOWEL,
  ENDS_x,
  ENDS_y,
  LAST_VOWEL,
  STARTS_pbkg,
  STARTS_q,
  STARTS_r,
  STARTS_th,
  STARTS_VOWEL,
  STARTS_y,
} from './types'

const PREFIX_JOIN = 'x'
const SUFFIX_JOIN = 'l'

// 'join' value is dictated by first for prefix (left most) and last for suffix (right most)
export function joinMorphemes(
  prev: BaseEntry,
  next: BaseEntry,
  join: string | undefined,
  prefix: boolean
) {
  const prevName = prev.name
  const nextName = next.name
  if (prev.definition.op === 'capitalize') {
    return nextName.charAt(0).toLocaleUpperCase() + nextName.slice(1)
  }
  if (nextName === '') {
    // 'silent' elements like imperative
    return prevName
  } else if (prevName === '') {
    return nextName
  }
  let fix = ''
  const last = LAST_VOWEL.exec(prevName)
  if (!last) {
    throw new Error(`Invalid word ${prevName} (no vowels)`)
  }
  const pvowel = ENDS_VOWEL.test(prevName) // includes 'y'
  const nvowel = STARTS_VOWEL.test(nextName) // does not include 'y'
  if (pvowel && nvowel) {
    // two vowels
    if (!prefix && nextName.length === 1 && nextName != 'e') {
      // moods: no fix
      fix = ''
    } else if (prevName.toLowerCase() === 'u' && !nextName.startsWith('u')) {
      // infinitive : no fix
      fix = ''
    } else {
      fix = join !== undefined ? join : prefix ? PREFIX_JOIN : SUFFIX_JOIN
    }
  } else if (ENDS_y.test(prevName) && STARTS_y.test(nextName)) {
    fix = join !== undefined ? join : 'n'
  } else if (!pvowel && !nvowel) {
    // two consonants or two semivowels
    if (
      join === '_' || // force join
      (ENDS_l.test(prevName) && STARTS_r.test(nextName)) ||
      (ENDS_k.test(prevName) && STARTS_q.test(nextName)) ||
      (ENDS_t.test(prevName) && STARTS_th.test(nextName)) ||
      (ENDS_x.test(prevName) && STARTS_pbkg.test(nextName)) ||
      prevName.slice(-1) === nextName.slice(0, 1)
    ) {
      // yes
      fix = join !== undefined && join !== '_' ? join : last[1].toLowerCase()
    }
  }
  return prevName + fix + nextName.replace('*', last[1].toLowerCase())
}
