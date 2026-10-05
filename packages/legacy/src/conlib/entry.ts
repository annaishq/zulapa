// Had to get these ones out of helpers to avoid compilation
// issues...

import { setDefaults } from './setDefaults'
import { makeSuffixAccessor } from './suffix'
import {
  BaseEntry,
  EntriesByType,
  Entry,
  EntryFunc,
  SuffixAccessor,
} from './types'

export function makeEntry<T extends Object = {}>(
  entries: EntriesByType
): EntryFunc<T> {
  let suffixAccessor: SuffixAccessor

  const entry: EntryFunc<T> = function entry(name, definition, type) {
    const id = definition.id || name
    const e = entries[type][id]
    if (e) {
      return e as Entry<T>
    }
    if (type === 'alt' && !definition.orig) {
      definition.orig = definition.alt
    }
    const obj: Partial<BaseEntry> = {
      id,
      name,
      type,
      definition: type === 'word' ? setDefaults(name, definition) : definition,
      toString() {
        return `[${name}](${type}-${id})`
      },
    }
    const entry = new Proxy(obj as Entry<T>, suffixAccessor)
    entries[type][id] = entry
    if (type === 'word' || type === 'alt') {
      entries.wordAndAlt[definition.id || name] = entry
    }
    return entry as Entry<T>
  }

  suffixAccessor = makeSuffixAccessor(entries, entry)
  return entry
}
