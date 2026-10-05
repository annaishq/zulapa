import { Action } from '../app'

export const toggle: Action<{ key: 'writ' | 'nsfw' | 'dark' | 'open' }> = (
  ctx,
  { key }
) => {
  ctx.state.zulapa[key] = !ctx.state.zulapa[key]
  console.log('SET', key, ctx.state.zulapa[key])
  window.localStorage.setItem(
    `zulapa.${key}`,
    JSON.stringify(ctx.state.zulapa[key])
  )
}
