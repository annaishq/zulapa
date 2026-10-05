import { getCla } from './getCla'
import { getGlo } from './getGlo'
import { joinMorphemes } from './joinMorphemes'
import {
  EntryByName,
  EntryDefinition,
  EntryFunc,
  isNativeKey,
  IsPrefix,
  MAIN_KEYS,
  Prefix,
  PrefixFunc,
} from './types'

export function makePrefix<T extends Object>(
  words: EntryByName,
  entry: EntryFunc
): PrefixFunc<T> {
  return function prefix(
    name: string,
    pdef: EntryDefinition,
    type: 'word' | 'alt' = 'word'
  ): Prefix<T> {
    if (!pdef.glo) {
      const key = MAIN_KEYS.find(k => pdef[k])
      pdef.glo = '*' + pdef[key!] + '*'
    }

    // Create entry so that it has its own card.
    if (!pdef.pref) {
      pdef.pref = pdef.glo
    }
    // const ent = entry(type, pref, Object.assign({}, prev, asEntry))
    const prev = entry(name, pdef, type)

    const prefixWord = new Proxy(words, {
      get(words, key) {
        if (key === IsPrefix) {
          return true
        } else if (isNativeKey(key)) {
          return (prev as any)[key]
        } else if (key === '$') {
          return prev
        }
        const id = `${prev.id}-${key as string}`
        const alt = words[id]
        if (alt) {
          // This particular sequence already exists
          return alt
        }

        // Build sequence
        let next = words[key as string]
        if (!next) {
          throw new Error(`Cannot find '${String(key)}' for ${name}`)
        }
        const nextName = joinMorphemes(prev, next, pdef.join, true)
        const cla = getCla(prev.definition, next.definition, true)
        const def = {
          id,
          glo: getGlo(prev.definition, next.definition, true, cla),
          alt: next.definition.alt || (() => next),
          cla,
          // propagate ncla with next first and if we have nothing from previous to support 'o', 'i', etc prefix
          // For example (o has ncla = verb)
          // nuo.. (next => o => ncla => verb)
          // onu.. (next => ø, prev => o => ncla => verb)
          ncla: next.definition.ncla || prev.definition.ncla,
          prev: () => prev,
        }
        return next[IsPrefix]
          ? prefix(nextName, def, 'alt')
          : entry(nextName, def, 'alt')
      },
    })

    words[prev.id] = prefixWord as any
    return prefixWord as any
  }
}
