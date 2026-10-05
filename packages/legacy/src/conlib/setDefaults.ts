// Had to get these ones out of helpers to avoid compilation
// issues...

import { EntryDefinition, MainKeys, MAIN_KEYS } from './types'

export function setDefaults(name: string, def: EntryDefinition) {
  const ndef = { ...def }
  ndef.forcedGlo = !!def.glo
  if (def.glo !== undefined && def.cla !== undefined) {
    return ndef
  }
  const key = Object.keys(def).find(k =>
    MAIN_KEYS.includes(k as any)
  ) as MainKeys
  if (!key) {
    throw new Error(
      `Invalid entry '${name}': ${JSON.stringify(def)} (none of the main keys).`
    )
  }
  if (def.glo === undefined) {
    const stars = key === 'adj' || key === 'adv' ? '*' : '**'
    const glo = key === 'verb' ? def[key]!.replace(/^to /, '') : def[key]
    ndef.glo = stars + glo + stars
  }
  if (def.cla === undefined) {
    ndef.cla = key
  }
  return ndef
}
