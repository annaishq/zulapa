import { Action, Filter } from '../app'

export interface FloatArg {
  id: string
  hidden?: boolean
  position: {
    top: number
    left: number
  }
}

export const float: Action<FloatArg> = (ctx, arg) => {
  const { float } = ctx.state.zulapa
  if (float && float.id === arg.id && !float.hidden) {
    // ignore
  } else {
    ctx.state.zulapa.float = arg
  }
}

export const hideFloat: Action<{ id: string }> = (ctx, arg) => {
  const { float } = ctx.state.zulapa
  if (!float || float.hidden || arg.id !== float.id) {
    return
  }
  float.hidden = true
}
