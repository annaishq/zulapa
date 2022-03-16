export const LAST_VOWEL = /([aoeiu])[^aoeiu]*$/
export const STARTS_VOWEL = /^[aoeiu]/
export const ENDS_VOWEL = /[aoeiu]$/

export function debug(l: any) {
  console.log(JSON.stringify(l, null, 2))
}

export const IsPrefix = Symbol('IsPrefix')

const NATIVE_KEYS: (string | number | symbol)[] = [
  IsPrefix,
  'toString',
  'toJSON',
  'id',
  'name',
  'type',
  'definition',
]

export function isNativeKey(key: string | number | symbol) {
  return NATIVE_KEYS.includes(key) || typeof key === 'symbol'
}

export function resolve(entry: EntryOrPrefix): BaseEntry {
  const e = entry as { $: BaseEntry }
  return e.$ || entry
}

// ============================================ Word

export interface EntryInfo {
  // MAIN KEYS ==========
  noun: string
  // property modifier
  adj: string
  // as an action
  verb: string
  // as an action modifier
  adv: string
  // generic
  def: string
  // MAIN KEYS ==========
  pos: string
  pref: string
  suff: string
  // INTERNAL
  writ: string
  phon: string
  phrases: string[]
  // image
  img: string
  imgpos: string
  // phrases only
  trad: string
  phrase: string
  // phrase options
  open?: boolean
  // alt ====
  // forced glo
  glo: string
  // suffix glo
  sglo?: string
  // https://www.eva.mpg.de/lingua/resources/glossing-rules.php
  forcedGlo: boolean
  // For prefix/suffix
  join: string
  // Type of element. Changes classname of gloss in UI (always set).
  cla: MainKeys
  // Type of next element class (only set when prefix as explicit class).
  ncla: MainKeys
  // Case forcing class on next/previous elements
  force: MainKeys
  // Set type (only as suffix)
  scla?: MainKeys
  // If this is true, the element is considered too common and should not
  // register phrases created with it (such as ACC markers, conjugation, etc).
  // set to false to ignore phrases.
  maxPhrases: number
}

export interface FullEntry extends EntryInfo {
  id: string
  name: string
  nsfw: boolean
  desc: () => string
  exam: () => BaseEntry[]
  etym: () => { id: string }[]
  see: () => { id: string }[]
  // For phrases
  words: () => Base[]
  // top-most original word (points to real word)
  alt: () => Base
  // for multi-level word composition (points to real word)
  orig: () => Base
  // for multi-level word composition (can point to alt or word)
  prev: () => Base
}

export const FULLTEXT_KEYS: (keyof EntryInfo)[] = [
  'noun',
  'verb',
  'adj',
  'adv',
  'def',
  'pos',
]

export type MainKeys = 'noun' | 'verb' | 'adj' | 'adv' | 'def'

export const MAIN_KEYS: MainKeys[] = ['noun', 'verb', 'adj', 'adv', 'def']

export const DEF_KEYS: (keyof CompiledEntry)[] = [
  ...FULLTEXT_KEYS.filter(k => !MAIN_KEYS.includes(k as any)),
  'deriv',
  'see',
]

export interface EntryByName {
  [key: string]: BaseEntry
}

export const TYPES: ('word' | 'card' | 'phrase' | 'alt')[] = [
  'word',
  'card',
  'phrase',
  'alt',
]

export interface EntriesByType {
  word: EntryByName
  card: EntryByName
  phrase: EntryByName
  alt: EntryByName
  wordAndAlt: EntryByName
  phraseOrig?: BaseEntry
}

export interface CompiledEntryByName {
  [key: string]: CompiledEntry
}

export interface CompiledEntriesByType {
  word: CompiledEntryByName
  card: CompiledEntryByName
  phrase: CompiledEntryByName
  alt: CompiledEntryByName
}

export type EntryDefinition = Partial<FullEntry>
export type BaseType = 'word' | 'card' | 'phrase' | 'alt'

export interface Base {
  id: string
  type: BaseType
  name: string
}

export interface BaseEntry extends Base {
  [IsPrefix]?: boolean
  definition: EntryDefinition
  toString: () => string
}

export type Entry<T> = BaseEntry & T

export interface CompiledEntry extends Partial<EntryInfo> {
  id: string
  name: string
  phon: string
  writ: string
  type: BaseType
  // concat of all text for search
  fulltext: string
  // alternative word to show def
  alt?: string
  prev?: string
  orig?: string
  etym?: string[]
  desc?: string
  deriv?: string[]
  see?: string[]
  // for phrases
  words?: string[]
  nsfw?: boolean
}

export interface SuffixAccessor {
  get(obj: BaseEntry, key: string): BaseEntry
}

export interface EntryFunc<T extends Object = {}> {
  (name: string, definition: EntryDefinition, type: BaseEntry['type']): Entry<T>
}

export type Prefix<T extends Object> = T & { $: BaseEntry } & Base
export type EntryOrPrefix = BaseEntry | Prefix<{}>

export interface PrefixFunc<T extends Object> {
  (name: string, definition: EntryDefinition, type?: 'word' | 'alt'): Prefix<T>
}