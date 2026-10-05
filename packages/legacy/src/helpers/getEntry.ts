import { CompiledEntriesByType } from '../conlib'

export function getEntry(
  ctx: { state: { zulapa: { db: CompiledEntriesByType } } },
  ref: string
) {
  if (!ref) {
    return undefined
  }
  const [type] = ref.split('-')
  const entries = ctx.state.zulapa.db[type as keyof CompiledEntriesByType]
  if (!entries) {
    console.error(`Invalid type '${type}' in id '${ref}'.`)
    return undefined
  }
  return entries[ref]
}
