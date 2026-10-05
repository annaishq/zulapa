import { EntryDefinition } from './types'

export function getCla(
  prev: EntryDefinition,
  next: EntryDefinition,
  prefix: boolean
) {
  if (next.scla) {
    return next.scla
  }

  const cla = prev.ncla || prev.cla!
  if (prefix && !prev.ncla) {
    // replace "weak" prefix class
    return next.cla!
  }
  return cla
}
