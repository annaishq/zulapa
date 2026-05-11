import { Comp, styled, useOvermind } from '../app'
import classnames from 'classnames'
import * as React from 'react'
import { Entry } from './Entry'

const INIT = {
  hidden: true,
  id: '',
  position: {
    top: 0,
    left: 0,
  },
}

export interface FloatProps {
  className?: string
}

const Wrapper = styled.div`
  pointer-events: none;
  position: fixed;
  opacity: 1;
  z-index: 99;
  &:not(.hidden) {
    visibility: visible;
    transition: top 0.2s ease-in, left 0.2s ease-in, opacity 0.2s ease-in,
      visibility 0.2s ease-in;
  }
  &.hidden {
    visibility: hidden;
    transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
    opacity: 0;
  }
`

export const Float: Comp<FloatProps> = ({ className }) => {
  const ctx = useOvermind()
  const [isHidden, setHidden] = React.useState(true)
  const { float } = ctx.state.zulapa
  const { id, position, hidden } = float || INIT
  if (!hidden && isHidden) {
    // This is to avoid initial slide while float appears
    setTimeout(() => {
      setHidden(false)
    })
  } else if (hidden && !isHidden) {
    setHidden(true)
  }
  return (
    <Wrapper
      className={classnames(className, { hidden: isHidden })}
      style={position}
    >
      <Entry id={id} popup />
    </Wrapper>
  )
}
