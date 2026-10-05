import { makeEntry } from './entry'
import { makePrefix } from './prefix'
import {
  Base,
  BaseEntry,
  EntriesByType,
  EntryDefinition,
  MainKeys,
  MAIN_KEYS,
  resolve,
} from './types'

export function makeLang<T extends Object>() {
  const entries: EntriesByType = {
    word: {},
    alt: {},
    card: {},
    phrase: {},
    caption: {},
    // word and alt, indexed by id, not type-id.
    wordAndAlt: {},
  }
  const entry = makeEntry<T>(entries)
  const prefix = makePrefix<T>(entries.wordAndAlt, entry)
  let phraseIdx = 0
  function makeId() {
    return `${++phraseIdx}`
  }
  function makePhrase(definition: EntryDefinition) {
    const p = entry(makeId(), definition, 'phrase')
    const e = entries.phraseOrig
    if (e) {
      p.definition.see = () => [e]
    }
    return p
  }

  function makeCaption(definition: EntryDefinition) {
    const p = entry(makeId(), definition, 'caption')
    const e = entries.phraseOrig
    if (e) {
      p.definition.see = () => [e]
    }
    return p
  }

  function alt(
    name: string,
    definition: EntryDefinition & { alt: () => Base }
  ) {
    return entry(name, definition, 'alt')
  }

  function phrase(trad: string, ...args: Base[]) {
    return makePhrase({ trad, words: () => args })
  }

  function caption(cap: string, trad: string, ...args: Base[]) {
    return makeCaption({ cap, trad, words: () => args })
  }

  function card(name: string, definition: EntryDefinition): BaseEntry {
    return entry(
      name,
      Object.assign({ writ: name, phon: '' }, definition),
      'card'
    )
  }

  function word(name: string, definition: EntryDefinition) {
    return entry(name, definition, 'word')
  }

  function suffix(name: string, definition: EntryDefinition) {
    if (!definition.suff) {
      const firstKey = (Object.keys(definition) as MainKeys[]).find(k =>
        MAIN_KEYS.includes(k)
      )
      definition.suff = definition[firstKey!]
    }
    return entry(name, definition, 'word')
  }

  return {
    entries,
    prefix,
    suffix,
    phrase,
    caption,
    card,
    word,
    alt,
    entry,
    resolve,
    makePhrase,
  }
}
