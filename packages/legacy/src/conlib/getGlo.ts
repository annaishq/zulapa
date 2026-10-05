import { getCla } from './getCla'
import { EntryDefinition } from './types'

export function getGlo(
  prev: EntryDefinition,
  next: EntryDefinition,
  prefix: boolean,
  base = getCla(prev, next, prefix)
): string {
  let glo = prev.glo || prev[prev.cla!]!
  if (prev.op === 'capitalize' || glo === '') {
    return next.glo || next[next.cla!]!
  }
  let force = next.scla // || next.force // should we use next.force here ?
  if (force) {
    // rewrite previous glo
    const parts = glo.split('.')
    let g = prev[force]
    if (g) {
      parts.pop()
      if (force === 'verb') {
        g = g.replace(/^to /, '')
      }
      parts.push('**' + g + '**')
      glo = parts.join('.')
    }
  }

  /*
  if (prefix && glo.includes('INF')) {
    // Special case. Have not found an elegant way to solve this yet...
    return glo + '.**' + next.verb! + '**'
  } else 
  */
  if (!prefix && next.sglo) {
    return glo + '.' + next.sglo
  } else if (!next.forcedGlo) {
    // Try to follow class
    let cla = base
    if (!prefix) {
      if (cla === 'noun' && next['adj']) {
        cla = 'adj'
      } else if (cla === 'verb' && next['adv']) {
        cla = 'adv'
      }
    }
    const nglo = next[cla] || next[base]
    if (nglo) {
      if (cla === 'verb') {
        return glo + '.**' + nglo.replace(/^to /, '') + '**'
      } else if (cla === 'noun') {
        return glo + '.**' + nglo + '**'
      } else {
        // modifier
        return glo + '.*' + nglo + '*'
      }
    }
  }
  const nglo = next.glo || next[next.cla!]!
  return glo + (nglo === '' ? '' : '.') + nglo
}
