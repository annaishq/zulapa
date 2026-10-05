import { Action } from '../app'

export interface SelectArg {
  id: string
}

export const select: Action<SelectArg> = (ctx, arg) => {
  if (ctx.state.zulapa.selected === arg.id) {
    delete ctx.state.zulapa.selected
  } else {
    ctx.state.zulapa.selected = arg.id
  }
}
