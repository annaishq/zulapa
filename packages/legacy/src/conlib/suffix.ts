// Had to get these ones out of helpers to avoid compilation
// issues...

import { getCla } from './getCla'
import { getGlo } from './getGlo'
import { joinMorphemes } from './joinMorphemes'
import {
  BaseEntry,
  EntriesByType,
  EntryFunc,
  isNativeKey,
  LAST_VOWEL,
  SuffixAccessor,
} from './types'

function appendEntry(
  entries: EntriesByType,
  entry: EntryFunc,
  prevEntry: BaseEntry,
  nextEntry: BaseEntry
) {
  const id = `${prevEntry.id}-${nextEntry.id}`
  const alt = entries.wordAndAlt[id]
  if (alt) {
    return alt
  } else {
    const prev = prevEntry.definition
    const next = nextEntry.definition
    const r = LAST_VOWEL.exec(prevEntry.name)
    if (!r && !prevEntry.definition.op && prevEntry.name !== '') {
      throw new Error(
        `Invalid word ${prevEntry.name} (no vowel): ${JSON.stringify({
          nextEntry,
        })}).`
      )
    }

    return entry(
      joinMorphemes(prevEntry, nextEntry, next.sjoin || next.join, false),
      {
        id: `${prevEntry.id}-${nextEntry.id}`,
        glo: getGlo(prev, next, false),
        cla: getCla(prev, next, false),
        alt: prev.alt || (() => prevEntry),
        orig: nextEntry ? () => nextEntry : undefined,
        prev: () => prevEntry,
      },
      'alt'
    )
  }
}

export function makeSuffixAccessor(
  entries: EntriesByType,
  entry: EntryFunc
): SuffixAccessor {
  return {
    get(obj: BaseEntry, key: string) {
      if (isNativeKey(key)) {
        return (obj as any)[key]
      } else if (key === '$') {
        return obj
      }
      const next = entries.wordAndAlt[key]
      if (next) {
        return appendEntry(entries, entry, obj, next)
      } else {
        throw new Error(
          `Invalid suffix: '${key}' (variable name does not match id).\n\n  id: "${key}" // <-- add this in definition\n\n`
        )
      }
    },
  }
}
