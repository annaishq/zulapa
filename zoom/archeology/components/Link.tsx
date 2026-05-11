import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Caption } from './Caption'
import { Phrase } from './Phrase'

export interface LinkProps {
  className?: string
  // from markdown
  type?: 'md' | 'md-open' | 'md-compact'
  id: string
}

// TODO: Merge with Anchor
const Wrapper = styled.span`
  cursor: pointer;
  color: #546161;
  align-self: start;
  &.ref {
    color: ${COLORS.ref_color};
    font-weight: 500;
  }
  &.high,
  &.ref.high {
    border-bottom: 2px dotted ${COLORS.high_color};
  }
`

const Anchor = styled.a`
  color: inherit;
  .Title &.writ {
    font-size: 130%;
  }
  &.writ {
    font-family: 'Telugu';
    font-size: 110%;
    font-weight: normal;
  }
  &:not(.out) {
    text-decoration: none;
  }
  &:hover {
    color: #397d7d;
  }
`

export const Link: Comp<LinkProps> = ({ className, id, type, children }) => {
  const ctx = useOvermind()
  const { writ } = ctx.state.zulapa
  if (id.startsWith('http') || id.startsWith('mailto')) {
    return (
      <Anchor href={id} children={children} className="out" target="_blank" />
    )
  }
  const [entryType] = id.split('-')
  if (entryType === 'phrase') {
    return <Phrase id={id} type={type} />
  } else if (entryType === 'caption') {
    return <Caption id={id} type={type} />
  }
  const entry = getEntry(ctx, id)
  if (!entry) {
    return null
  }
  const ref = entry.alt || id
  let timer: any
  // @ts-ignore
  let customLink = false
  if (children && (children as any)['0']) {
    const inner = (children as any)['0'].props.children
    customLink = inner && inner !== entry.name
  }
  const text = customLink ? children : writ ? entry.writ : entry.name
  const anchorClass = customLink
    ? 'custom'
    : writ && entryType !== 'card'
    ? 'writ'
    : ''
  return (
    <Wrapper
      className={classnames('Link', className, {
        ref: entryType,
        // high: ref === ctx.state.zulapa.selected,
      })}
      onMouseEnter={e => {
        const r = e.currentTarget.getBoundingClientRect()
        if (!ctx.state.zulapa.float || ctx.state.zulapa.float.hidden) {
          timer = setTimeout(() => {
            ctx.actions.zulapa.float({
              id: ref,
              position: { top: r.top + r.height, left: r.left + r.width / 2 },
            })
          }, 500)
        } else {
          ctx.actions.zulapa.float({
            id: ref,
            position: { top: r.top + r.height, left: r.left + r.width / 2 },
          })
        }
      }}
      onMouseLeave={e => {
        if (timer) {
          clearTimeout(timer)
          timer = undefined
        }
        setTimeout(() => {
          ctx.actions.zulapa.hideFloat({ id: ref })
        }, 500)
      }}
      onClick={() => {
        ctx.actions.zulapa.hideFloat({ id: ref })
      }}
    >
      <Anchor href={`#${ref}`} className={anchorClass}>
        {text}
      </Anchor>
    </Wrapper>
  )
}
