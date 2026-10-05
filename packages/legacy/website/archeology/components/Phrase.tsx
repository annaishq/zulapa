import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Entry } from './Entry'
import { List } from './List'
const manyWords = /^[^-]+-[^-]+-/

export interface PhraseProps {
  className?: string
  type?: 'md' | 'md-open' | 'md-compact'
  id: string
}

export function singleWord(words: string[]) {
  if (words.length === 1) {
    if (!manyWords.test(words[0])) {
      return true
    }
  }
  return false
}

export const PhraseWrap = styled.div`
  position: relative;
  top: -0.2em;
  display: table;
  ${/* inline-flex */ ''}
  color: #222;
  &:hover .Trad:not(.fix) {
    ${
      /*opacity: 0;
    visibility: hidden;*/ ''
  }
  }
  &.nsfw {
    background: ${COLORS.nsfw_bg};
    box-shadow: ${COLORS.nsfw_shadow};
    border-radius: 0.1em;
    padding: 1em;
  }
  &:not(.compact) {
    margin-left: -7px;
    margin-bottom: 1rem;
  }
  &.nsfw .Trad:not(.fix) {
    top: -3em;
    left: 3em;
  }
`

export const Trad = styled.div`
  color: #555;
  transition: filter 0.3s;
  &.blink {
    filter: grayscale(0%) hue-rotate(45deg) saturate(1.5);
    opacity: 1;
  }
    margin: 0.2em 0;
    background: ${COLORS.fix_bg};
    color: ${COLORS.fix_color};
    border-radius: 0.2em;
    padding: 0.2em 0.4em;
`

export const Info = styled.div`
  cursor: pointer;
  transform: translate(0, 1px);
  padding-right: 0.2em;
  opacity: 0.5;
  font-size: 64%;
  filter: hue-rotate(234deg);
  transition: filter 0.3s;
  &.blink,
  &.blink.open,
  &.blink:hover,
  &.blink.open:hover {
    filter: grayscale(0%) hue-rotate(90deg) saturate(1.5);
    opacity: 1;
  }
  &:hover {
    opacity: 0.7;
  }
  &.open {
    opacity: 1;
  }
`

export const GWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  &.open {
    box-shadow: ${COLORS.open_shadow};
  }
  &.compact {
    float: right;
    color: ${COLORS.compact_trad};
    .phrase.glo {
      padding: 0.1em 0.5em;
    }
  }
`

export const Phrase: Comp<PhraseProps> = ({ className, type, id }) => {
  const ctx = useOvermind()
  const [open, setOpen] = React.useState(false)
  const phrase = getEntry(ctx, id)
  if (!phrase) {
    return null
  }
  if (phrase.nsfw) {
    if (!ctx.state.zulapa.nsfw) {
      return null
    }
  }

  function phraseClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    if (phrase?.open || e.ctrlKey || e.metaKey) {
      const div = e.currentTarget
      if (div) {
        div.classList.add('blink')
        setTimeout(() => {
          div.classList.remove('blink')
        }, 1000)
      }
      ctx.actions.zulapa.copyPhrase({ id })
    } else {
      setOpen(!open)
    }
  }

  if (
    (phrase.open && type === 'md') ||
    type === 'md-open' ||
    type === 'md-compact'
  ) {
    return (
      <PhraseWrap
        className={classnames(className, {
          nsfw: phrase.nsfw,
          open: true,
          compact: type === 'md-compact',
        })}
      >
        {type === 'md-compact' ? (
          <GWrap className="compact">
            {phrase.trad}
            <List type={type} entries={phrase.words!} glo />
          </GWrap>
        ) : (
          <GWrap>
            {phrase.trad && (
              <Trad onClick={phraseClick} className={`Trad fix`}>
                {phrase.trad}
              </Trad>
            )}
            {singleWord(phrase.words!) ? (
              <Entry id={phrase.words![0]} reduced />
            ) : (
              <List type={type} entries={phrase.words!} glo />
            )}
          </GWrap>
        )}
      </PhraseWrap>
    )
  } else {
    return (
      <PhraseWrap className={classnames(className, { nsfw: phrase.nsfw })}>
        <Info onClick={phraseClick} className={open ? 'open' : ''}>
          ℹ️
        </Info>
        {open ? (
          <GWrap className="open">
            {phrase.trad && <Trad className="Trad">{phrase.trad}</Trad>}
            <List type={type} entries={phrase.words!} glo />
          </GWrap>
        ) : (
          <List type={type} entries={phrase.words!} glo={open} />
        )}
      </PhraseWrap>
    )
  }
}
