import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { CompiledEntry, DEF_KEYS, MAIN_KEYS } from '../conlib'
import { getEntry } from '../helpers/getEntry'
import { Link } from './Link'
import { List } from './List'
import { Markdown } from './Markdown'
import { GWrap, Info } from './Phrase'

export interface EntryProps {
  className?: string
  popup?: boolean
  reduced?: boolean
  id: string
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  border: 1px solid ${COLORS.wrapper_border};
  background: ${COLORS.wrapper_bg};
  margin: 40px;
  border-radius: 5px;
  align-items: start;
  align-self: top;
  box-shadow: 0 0 20px ${COLORS.wrapper_shadow};
  max-width: 830px;
  &.reduced {
    background: #2d162c;
    margin: 0px auto auto 0px;
    padding: 0.5em;
    border-radius: 0.6em;
    div:not(.img) {
      background: none;
    }
  }
  .caption &.reduced {
    background: #210021d6;
    box-shadow: 0 0 30px #ff00ff4d;
    border: 1px solid #f0fa;
  }
  &:not(.phrase) {
    flex-direction: row;
  }
  &.phrase {
    flex-direction: column;
  }
  &.card.compact {
    p {
      margin-top: 2em;
      white-space: pre-line;
    }
  }
  &.selected:not(.popup) > .Title {
    background: ${COLORS.selected_bg};
    color: ${COLORS.selected_title};
  }
  &.popup {
    box-shadow: 8px 8px 20px #00000070;
    margin: 0;
    top: 30px;
    left: -25px;
    z-index: 3;
  }
  hr,
  div.hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(80, 80, 80, 0),
      rgba(80, 80, 80, 0.75),
      rgba(80, 80, 80, 0)
    );
  }
  div.hr:first-child {
    display: none;
  }
  div.hr:last-child {
    display: none;
  }
  div.hr {
    margin: 10px;
  }

  & > .img {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: var(--data-opa);
    pointer-events: none;
    background-image: var(--data-img);
    background-repeat: no-repeat;
    background-position: center var(--data-pos);
    background-size: cover;
  }
`

const ArrowUp = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid rgb(68, 68, 68);
  border-width: 1px 1px 0 0;
  background: rgb(214, 211, 198);
  transform: rotate(-45deg);
  top: -9px;
  left: 15px;
  position: absolute;
`

const Title = styled.div`
  transition: background-color 0.8s;
  border-top-left-radius: 5px;
  background: ${COLORS.title_bg};
  color: ${COLORS.title_color};
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-shrink: 0;
  flex-grow: 0;
  z-index: 1;
  &:not(.phrase) {
    min-width: 7rem;
    border-bottom-left-radius: 5px;
    & > div {
      padding: 0.8em 0.8em 0px 0.8em;
    }
    padding-bottom: 0.8em;
  }
  &.phrase {
    border-top-right-radius: 5px;
    padding: 12px 12px 5px;
    line-height: 1.3rem;
    display: block;
    & .Trad {
      top: -32px;
    }
  }
`

const Name = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
`

const Suf = styled.span`
  position: relative;
  &.suff::before {
    left: 0;
  }
  &.pref::before {
    right: 0;
  }
  &::before {
    position: absolute;
    top: 22px;
    background: ${COLORS.suff_bg};
    display: none;
    content: attr(data-def);
    font-size: 14px;
    color: #555;
    font-weight: normal;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 3px 3px 6px ${COLORS.suff_shadow};
    border: 1px solid ${COLORS.suff_border};
  }
  &:hover::before {
    display: block;
  }
  color: ${COLORS.suff_color};
`

const Group = styled.div`
  &.Main {
    font-size: 1.3rem;
    background: ${COLORS.main_bg};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.glo_border};
  }
  padding: 0.8em;
`

const Def = styled.span`
  color: ${COLORS.def_color};
  & span {
    margin-right: 10px;
    color: ${COLORS.def_color};
  }
  font-weight: 500;
  &.noun {
    color: ${COLORS.noun_color};
  }
  &.adj {
    color: ${COLORS.adj_color};
  }
  &.verb {
    color: ${COLORS.verb_color};
  }
  &.adv {
    color: ${COLORS.adv_color};
  }
`

const Phon = styled.div`
  font-size: 1rem;
`

const Other = styled.div`
  font-size: 1rem;
`
// margin-left: 8px;

const Definitions = styled.div`
  .phrase > & {
    border-left: none;
    border-top: 1px solid ${COLORS.glo_border};
  }
  .card > & {
    border-left: none;
  }
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-bottom: 5px;
  overflow: hidden;
  align-self: stretch;
  border-left: 1px solid ${COLORS.glo_border};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${COLORS.definitions_bg};
  z-index: 3;
`

const Definition = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  &.desc {
    padding: 0 20px;
    line-height: 1.6rem;
    color: ${COLORS.desc_color};
    display: block;
    align-self: stretch;
    h4,
    h5,
    h6 {
      display: none;
    }
    h4 + *,
    h5 + *,
    h6 + * {
      position: relative;
      margin-left: 40px;
      margin-right: 80px;
      padding: 10px 10px 5px;
      border-radius: 7px 2px 2px 7px;
      li {
        list-style: none;
      }
    }
    h4 + *::before,
    h5 + *::before,
    h6 + *::before {
      position: absolute;
      top: 4px;
      left: -23px;
    }
    h4 + * {
      display: var(--nsfw);
      background: ${COLORS.desc_h4_bg};
      border-left: 26px solid ${COLORS.desc_h4_border};
      color: ${COLORS.desc_h4};
    }
    h4 + * .nsfw {
      background: none;
    }
    h4 + *::before {
      content: '🍑';
    }
    h5 + * {
      background: ${COLORS.desc_h5_bg};
      border-left: 26px solid ${COLORS.desc_h5_border};
    }
    h5 + *::before {
      content: '💡';
    }
    h6 + * {
      background: ${COLORS.desc_h6_bg};
      border-left: 6px solid ${COLORS.desc_h6_border};
      padding-left: 20px;
    }
    h6 + *::before {
      content: '';
    }
    h1 {
      font-size: 2.1rem;
      margin-bottom: 2.4rem;
      color: ${COLORS.desc_first_h1};
    }
    h1:not(:first-child) {
      font-size: 1.8rem;
      margin-top: 4.8rem;
      color: ${COLORS.desc_h1};
    }
    h2 {
      font-size: 1.6rem;
      margin-top: 3rem;
      color: ${COLORS.desc_h2};
    }
    h3 {
      font-size: 1.2rem;
      margin-top: 1.2rem;
      color: ${COLORS.desc_h3};
    }
    h1 em,
    h2 em,
    h3 em {
      font-size: 80%;
      font-weight: normal;
      font-style: normal;
    }
    ul {
    }
    img {
      border: 1px solid ${COLORS.glo_border};
      display: table;
      margin: auto;
    }
    blockquote {
      font-family: 'Times New Roman', Times, serif;
      padding: 0.5em 10px;
      border-radius: 2px;
      position: relative;
      & p:first-child {
        margin-top: 10px;
      }
      & p:not(:last-child) {
        font-size: 1.9rem;
        line-height: 2rem;
      }
      & p:last-child {
        text-align: right;
        margin-top: -1.5rem;
        margin-bottom: 0;
      }
      &:before {
        position: absolute;
        font-weight: 500;
        top: 22px;
        left: -33px;
        opacity: 0.8;
        content: open-quote;
        font-size: 4em;
      }
    }
    code {
      font-size: 90%;
      font-family: 'Fira Code', Courier, monospace;
      display: inline-block;
      color: ${COLORS.desc_code};
    }
    em {
      font-weight: italic;
    }
    strong {
      font-weight: 500;
    }
    table {
      color: inherit;
      margin: 2rem auto;
      border-collapse: collapse;
    }
    table:first-child,
    p:first-child {
      margin-top: 0;
    }
    table:last-child,
    p:last-child {
      margin-bottom: 0;
    }
    td,
    th {
      border: 1px solid ${COLORS.glo_border};
      padding: 4px 10px;
    }
    th {
      background: ${COLORS.phrase_glo_bg};
    }
    th:empty {
      display: none;
    }
    pre {
      background: ${COLORS.phrase_glo_bg};
      margin: 10px auto;
      display: table;
      border: 1px solid ${COLORS.glo_border};
      padding: 3px 8px;
      border-radius: 3px;
    }
    img {
      max-width: 80%;
      border: 1px solid ${COLORS.glo_border};
      margin: auto;
    }
    a {
      text-decoration: none;
      color: ${COLORS.desc_a};
    }
  }
`

const DefType = styled.div`
  cursor: pointer;
  margin-right: 20px;
  font-weight: 500;
  width: 4rem;
  flex-shrink: 0;
  color: ${COLORS.def_type};
  &.selected {
    border-left: 4px solid #8a847a;
    position: relative;
    left: -4px;
  }
  text-align: right;
`

const DefText = styled.div`
  color: ${COLORS.def_text};
`

export const ID = styled.a`
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`

export const MyInfo = styled(Info)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 9;
`

export const Entry: Comp<EntryProps> = ({ className, id, popup, reduced }) => {
  const ctx = useOvermind()
  const entry = getEntry(ctx, id)
  const [compact, setCompact] = React.useState(entry?.compact)
  const open = reduced || ctx.state.zulapa.open
  const { filter, writ } = ctx.state.zulapa
  if (!entry) {
    // Should never happen
    return null
  }
  let highKey: string | undefined
  if (filter) {
    const { type, key } = filter
    if (type === 'type') {
      if (!entry[key as keyof CompiledEntry]) {
        return null
      }
      highKey = key
    } else {
      if (!entry.fulltext.includes(key)) {
        return null
      }
    }
  }

  const style = entry.img
    ? {
        ['--data-img']: `url(${entry.img})`,
        ['--data-pos']: entry.img_pos || '50%',
        ['--data-opa']: entry.img_opa || COLORS.img_opa,
      }
    : {}
  const def_keys = DEF_KEYS.filter(k => entry[k])
  return (
    <Wrapper
      style={style as React.CSSProperties}
      className={classnames(entry.type, className, {
        popup,
        reduced,
        compact,
        // selected: id === ctx.state.zulapa.selected,
      })}
    >
      {entry.img && <div className="img" />}
      {popup ? <ArrowUp /> : !reduced && <ID id={id} />}
      {!popup && (
        <MyInfo
          onClick={() => setCompact(!compact)}
          className={compact ? 'compact' : ''}
        >
          📦
        </MyInfo>
      )}
      {entry.type === 'phrase' ? (
        <Title className="Title phrase">
          <Link id={id} type="md" />
        </Title>
      ) : (
        entry.type !== 'card' && (
          <Title className="Title">
            <Name onClick={() => ctx.actions.zulapa.select({ id: entry.id })}>
              {entry.suff && (
                <Suf className="suff" data-def={entry.suff}>
                  ○&nbsp;
                </Suf>
              )}
              {writ ? entry.writ : entry.name}
              {entry.pref && (
                <Suf className="pref" data-def={entry.pref}>
                  &nbsp;○
                </Suf>
              )}
            </Name>
            <Phon>{entry.phon}</Phon>
            <Other>{writ ? entry.name : entry.writ}</Other>
          </Title>
        )
      )}
      <Definitions>
        {entry.etym && (
          <React.Fragment>
            <GWrap className="etym">
              <List className="etym" entries={entry.etym} type="md-open" glo />
            </GWrap>
          </React.Fragment>
        )}
        {entry.type === 'card' && entry.noun === '' ? (
          false
        ) : (
          <Group className="Main">
            {MAIN_KEYS.filter(key => entry[key]).map((key, idx) => (
              <Def className={key} key={key}>
                {idx > 0 ? <span>,</span> : null}
                {entry[key]}
              </Def>
            ))}
          </Group>
        )}
        {!reduced && def_keys.length > 0 && (
          <Group>
            {def_keys.map(key => (
              <Definition key={key}>
                <DefType
                  className={classnames(key, { selected: key === highKey })}
                  onClick={() =>
                    ctx.actions.zulapa.filter({ type: 'type', key })
                  }
                >
                  {key}
                </DefType>
                {key === 'etym' || key === 'see' || key === 'deriv' ? (
                  <List className={key} entries={entry[key]!} />
                ) : (
                  <DefText className={key}>{entry[key]}</DefText>
                )}
              </Definition>
            ))}
          </Group>
        )}
        {(!reduced || (reduced && entry.type === 'card')) && entry.desc && (
          <Group>
            <Definition className="desc">
              <Markdown
                text={entry.desc}
                type={compact ? 'md-compact' : open ? 'md-open' : 'md'}
              />
            </Definition>
          </Group>
        )}
        {!reduced && entry.phrases && (
          <Group>
            <Definition className="desc">
              <List
                className="phrases"
                entries={entry.phrases}
                type="md"
                // type={open ? 'md-open' : 'md'} // open phrases
              />
            </Definition>
          </Group>
        )}
      </Definitions>
    </Wrapper>
  )
}
