import classnames from 'classnames'
import * as htmlToImage from 'html-to-image'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Entry } from './Entry'
import { List } from './List'
import { Markdown } from './Markdown'
import { GWrap, PhraseProps, singleWord, Trad } from './Phrase'

const CaptionWrap = styled.div`
  position: relative;
  display: inline-flex;
  padding: 1rem 2rem;
  background: transparent;
  font-size: 1.5rem;
  &:not(.small) {
    width: 512px;
    height: 470px;
  }
  #root & {
    margin: 0;
  }
  &.small {
    font-size: 0.8rem;
    padding: 0;
  }
  &.noCaption .Cap {
    display: none;
  }
  #root & .phrase.glo {
    background: #00000049;
    border: none;
  }
  #root & .Trad.fix {
    background: #00000049;
  }
  #root &.small .reduced {
    display: none;
  }
`

const CWrap = styled.div`
  display: table;
  margin: 0px auto auto 0px;
  background: #210021d6;
  box-shadow: 0 0 30px #ff00ff4d;
  padding: 0.5em;
  border-radius: 0.6em;
  border: 1px solid #f0fa;
  .small & {
    display: none;
  }
`
export const Cap = styled.div`
  white-space: nowrap;
  cursor: pointer;
  &.fix {
    display: table;
    margin: 0 auto 0.8em 0;
    font-size: 1.3em;
    padding: 0.4em;
    color: #fff;
    border-radius: 7px;
    background: #000a;
  }
  .small &.fix {
    margin-bottom: 0;
  }
  & > p {
    margin: 0;
    padding: 0;
    strong {
      font-weight: bold;
      color: #f0f;
    }
    em {
      color: var(--title_color);
      font-style: normal;
      font-weight: bold;
    }
  }
`

function saveAs(blob: string, fileName: string) {
  const elem = window.document.createElement('a')
  elem.href = blob
  elem.download = fileName
  elem.style.display = 'none'
  ;(document.body || document.documentElement).appendChild(elem)

  if (typeof elem.click === 'function') {
    elem.click()
  } else {
    elem.target = '_blank'
    elem.dispatchEvent(
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    )
  }
  URL.revokeObjectURL(elem.href)
  elem.remove()
}

export const Caption: Comp<PhraseProps> = ({ className, type, id }) => {
  const ctx = useOvermind()
  const caption = getEntry(ctx, id)!
  if (!caption) {
    return null
  }
  if (caption.nsfw) {
    if (!ctx.state.zulapa.nsfw) {
      return null
    }
  }

  function capClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    const div = e.currentTarget.parentElement?.parentElement
    if (div) {
      div.classList.add('caption')
      div.classList.remove('small')
      if (e.altKey) {
        div.classList.add('noCaption')
      }
      htmlToImage.toPng(div).then(function (dataUrl) {
        div.classList.add('small')
        div.classList.remove('caption')
        div.classList.remove('noCaption')
        saveAs(
          dataUrl,
          `${
            caption.id.replace('caption-', '') +
            '-' +
            (caption.cap || '').replaceAll(' ', '-')
          }.png`
        )
      })
    }
  }

  return (
    <CaptionWrap
      className={classnames(className, {
        nsfw: caption.nsfw,
        small: true,
      })}
    >
      <GWrap>
        {caption.cap && (
          <Cap onClick={capClick} className={`Cap fix`}>
            <Markdown text={caption.cap} type="md" />
          </Cap>
        )}
        {caption.trad === '' && singleWord(caption.words!) ? (
          <Entry id={caption.words![0]} reduced />
        ) : (
          !(caption.trad === '' && caption.words?.length === 0) && (
            <CWrap>
              {caption.trad && (
                <Trad className={`Trad fix`}>{caption.trad}</Trad>
              )}
              <List type={type} entries={caption.words!} glo />
            </CWrap>
          )
        )}
      </GWrap>
    </CaptionWrap>
  )
}
