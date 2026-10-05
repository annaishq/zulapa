import { BaseType, EntryOrPrefix, makeLang } from '../conlib'
import * as words from './words'

const zulapa = makeLang<typeof words>()
export const entries = zulapa.entries
export const prefix = zulapa.prefix
export const suffix = zulapa.suffix
export const phrase = zulapa.phrase
export const caption = zulapa.caption
export const word = zulapa.word
export const alt = zulapa.alt
export const card = zulapa.card

export function block(
  ...phrases: { t: string; p: { id: string; type: BaseType; name: string }[] }[]
) {
  return `###### block\n* ${phrases.map(p => phrase(p.t, ...p.p)).join('\n* ')}`
}

export function phraseX(
  trad: string,
  ...args: { id: string; type: BaseType; name: string }[]
) {
  return zulapa.makePhrase({ trad, nsfw: true, words: () => args })
}

export function ophrase(
  trad: string,
  ...args: { id: string; type: BaseType; name: string }[]
) {
  return zulapa.makePhrase({ trad, words: () => args, open: true })
}

export function ref(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `${ent} (${ent.definition[ent.definition.cla!]})`
}

export function refAndGlo(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  const def = Object.values(ent.definition)[0]
  if (def) {
    return `${ent} (${def}) \`${ent.definition.glo?.replaceAll('*', '')}\``
  } else {
    return `${ent} \`${ent.definition.glo?.replaceAll('*', '')}\``
  }
}

export function gloss(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `\`${ent.definition.glo?.replaceAll('*', '')}\``
}

export function debug(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `### ${ent}\n\n~~~\n${JSON.stringify(ent.definition, null, 2)}\n~~~`
}

export function nounRef(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `${ent} (${ent.definition.noun})`
}

export function adjRef(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `${entry} (${ent.definition.adj})`
}

export function linkAndGlo(entry: EntryOrPrefix) {
  const ent = zulapa.resolve(entry)
  return `${entry} \`${ent.definition.glo}\``
}

export function link(text: string, entry: EntryOrPrefix) {
  return `[${text}](${entry.type}-${entry.id})`
}
