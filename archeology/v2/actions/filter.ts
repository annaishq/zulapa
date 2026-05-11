import { Action, Filter } from '../app'

export type FilterArg = Filter

export const filter: Action<FilterArg> = (ctx, arg) => {
  const { filter } = ctx.state.zulapa
  if (filter && filter.type === arg.type && filter.key === arg.key) {
    delete ctx.state.zulapa.filter
  } else {
    ctx.state.zulapa.filter = arg
  }
}
