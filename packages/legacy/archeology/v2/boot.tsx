import { Overmind } from 'overmind'
import { Provider } from 'overmind-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as actions from './actions'
import { ZulapaConfig } from './app'
import { App } from './components'
import { CompiledEntriesByType, TYPES } from '../../src/conlib'
import * as xdb from '../../src/db.json'
import './style.css'

const db = xdb as CompiledEntriesByType

function phraseSort(a: string, b: string) {
  return db.phrase[a].phrase! < db.phrase[b].phrase! ? -1 : 1
}

const start_dark = JSON.parse(
  window.localStorage.getItem('zulapa.dark') || 'true'
)
// Avoid blink
if (start_dark) document.body.classList.add('dark')

const config: ZulapaConfig = {
  onInitialize(ctx) {
    window.addEventListener('hashchange', function (e) {
      const id = window.location.hash.replace('#', '')
      ctx.actions.zulapa.select({ id })
    })
    ctx.state.zulapa.writ = JSON.parse(
      window.localStorage.getItem('zulapa.writ') || 'false'
    )
    ctx.state.zulapa.nsfw = JSON.parse(
      window.localStorage.getItem('zulapa.nsfw') || 'true'
    )
    ctx.state.zulapa.dark = start_dark
    ctx.state.zulapa.open = JSON.parse(
      window.localStorage.getItem('zulapa.open') || 'true'
    )
  },
  state: {
    zulapa: {
      db,
      lexicon: Object.assign(
        {},
        ...TYPES.map(type => ({ [type]: Object.keys(db[type]).sort() })),
        { phrase: Object.keys(db.phrase).sort(phraseSort) }
      ),
      float: {
        id: 'card-zu',
        hidden: true,
        position: {
          top: 5000,
          left: 5000,
        },
      },
    },
  },
  actions: {
    zulapa: actions,
  },
}

export function renderApp() {
  try {
    ReactDOM.render(
      <Provider value={new Overmind(config, { devtools: false })}>
        <App />
      </Provider>,
      document.querySelector('#root')
    )
  } catch (err) {
    console.error(err)
    const root = document.querySelector('#root .loader')
    if (root) {
      root.innerHTML = `Could not load app`
    }
  }
}

renderApp()
