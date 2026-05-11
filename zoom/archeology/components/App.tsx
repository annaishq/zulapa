import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import {
  Colors,
  COLORS,
  Comp,
  DARK_COLORS,
  LIGHT_COLORS,
  styled,
  useOvermind,
} from '../app'
import { Entry } from './Entry'
import { Float } from './Float'

export interface AppProps {
  className?: string
}

const Wrapper = styled.div`
  display: table;
  margin: auto;
`

function print_colors(theme: Colors) {
  let k: keyof Colors
  const list: string[] = []
  for (k in COLORS) {
    list.push(`--${k}: ${theme[k]};`)
  }
  return list.join('\n')
}

const GlobalStyles = createGlobalStyle`
  body.dark {
    ${print_colors(DARK_COLORS)}
  }
  body:not(.dark) {
    ${print_colors(LIGHT_COLORS)}
  }
  body {
    background: ${COLORS.body_bg};
  }
`

const WritButton = styled.div`
  position: fixed;
  cursor: pointer;
  top: 4px;
  right: 5px;
  display: block;
  z-index: 99;
  background: ${COLORS.writ_btn_bg};
  padding: 3px 8px 6px;
  &.writ {
    padding-bottom: 4px;
  }
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 0px 6px #00000050;
  font-weight: 500;
  color: #333;
`

const Nsfw = styled(WritButton)`
  right: 120px;
  &.on {
    background: ${COLORS.nsfw_btn_bg};
  }
`
const DarkBtn = styled(WritButton)`
  right: 180px;
  &.on {
    background: ${COLORS.nsfw_btn_bg};
  }
`

const OpenBtn = styled(WritButton)`
  right: 240px;
  &.on {
    background: ${COLORS.nsfw_btn_bg};
  }
`

export const Dark: Comp<AppProps> = () => {
  const ctx = useOvermind()
  const { dark } = ctx.state.zulapa
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [dark])
  return (
    <DarkBtn
      className={dark ? 'on' : ''}
      onClick={() => ctx.actions.zulapa.toggle({ key: 'dark' })}
    >
      🌜
    </DarkBtn>
  )
}

export const Open: Comp<AppProps> = () => {
  const ctx = useOvermind()
  const { open } = ctx.state.zulapa
  return (
    <OpenBtn
      className={open ? 'on' : ''}
      onClick={() => ctx.actions.zulapa.toggle({ key: 'open' })}
    >
      👀
    </OpenBtn>
  )
}

export const App: Comp<AppProps> = ({ className }) => {
  const ctx = useOvermind()
  const { lexicon } = ctx.state.zulapa
  const { writ, nsfw } = ctx.state.zulapa

  return (
    <React.Fragment>
      <GlobalStyles />
      <WritButton
        className={writ ? '' : 'writ'}
        onClick={() => ctx.actions.zulapa.toggle({ key: 'writ' })}
      >
        {writ ? 'latin' : 'తేలుగు'}
      </WritButton>
      <Nsfw
        className={nsfw ? 'on' : ''}
        onClick={() => ctx.actions.zulapa.toggle({ key: 'nsfw' })}
      >
        🍑
      </Nsfw>
      <Dark />
      <Open />
      <Float />
      <Wrapper
        style={{ ['--nsfw']: nsfw ? 'block' : 'none' } as React.CSSProperties}
        className={className}
      >
        {lexicon.card.map(id => (
          <Entry key={id} id={id} />
        ))}
        {lexicon.word.map(id => (
          <Entry key={id} id={id} />
        ))}
        {/*lexicon.phrase.map(id => (
          <Entry key={id} id={id} />
        ))*/}
      </Wrapper>
    </React.Fragment>
  )
}
