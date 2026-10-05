import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Link, LinkProps } from './Link'
import { Markdown } from './Markdown'

export interface DerivedProps {
  className?: string
  type?: 'md' | 'md-open' | 'md-compact'
  glo?: boolean
  entries: string[]
}

export const ListWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  &.phrase.etym.glo {
    align-self: stretch;
    border: none;
    background: ${COLORS.list_bg};
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid ${COLORS.glo_border};
  }
  &.etym a {
    color: #222;
    font-weight: 500;
  }
  &.phrase {
    margin: 0;
  }
  &.phrases {
    flex-direction: column;
  }
  &.phrases > *:not(:first-child) {
    margin-top: 0.2em;
  }
  &.phrase.glo {
    display: flex;
    flex-direction: row;
    background: ${COLORS.phrase_glo_bg};
    border-radius: 0.2em;
    border: 1px solid ${COLORS.glo_border};
    padding: 0.2em;
  }
  & .Link:not(:last-child) {
    margin-right: 0.4em;
  }
  & .Link.Link a {
    color: inherit;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.2em;
  margin: 0.4em 1.2em;
  & > p {
    font-family: Monaco;
    font-size: 0.8em;
    margin-top: 0.8em;
    color: ${COLORS.glo_color};
  }
  &&.noun strong {
    color: ${COLORS.noun_color};
  }
  &&.noun em,
  &&.adj strong,
  &&.adj em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adj_color};
  }
  &&.verb strong {
    color: ${COLORS.verb_color};
  }
  &&.verb em,
  &&.adv strong,
  &&.adv em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adv_color};
  }
`

const Aspect = styled.div`
  font-family: Monaco;
  font-size: 0.9em;
  margin-top: 0.9em;
  &.writ {
    font-family: 'Telugu';
    font-size: 0.9em;
    color: ${COLORS.writ_color};
  }
  &.name {
    color: ${COLORS.name_color};
  }
  &.glo {
    font-size: 0.8em;
  }
  &.phon {
    position: relative;
    font-size: 0.8em;
    left: -0.8em;
  }
  color: ${COLORS.aspect_color};
`

export const GlossAndLink: Comp<LinkProps> = props => {
  const ctx = useOvermind()
  const { writ } = ctx.state.zulapa
  const entry = getEntry(ctx, props.id)
  if (!entry) {
    return null
  }
  if (props.type === 'md-compact') {
    return <Link {...props} />
  } else {
    return (
      <Detail className={entry.cla}>
        <Link {...props} />
        <Aspect className="phon">{entry.phon}</Aspect>
        <Aspect className={writ ? 'name' : 'writ'}>
          {writ ? entry.name : entry.writ}
        </Aspect>
        <Markdown text={entry.glo!} type="md" />
      </Detail>
    )
  }
}

export const List: Comp<DerivedProps> = ({ className, entries, type, glo }) => {
  return (
    <ListWrapper
      className={classnames(className, { phrase: type !== undefined, glo })}
    >
      {entries.map(key =>
        glo ? (
          <GlossAndLink id={key} type={type} />
        ) : (
          <Link id={key} type={type} />
        )
      )}
    </ListWrapper>
  )
}
