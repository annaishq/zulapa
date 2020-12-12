import './style.css'
import { Overmind } from 'overmind'
import { Provider } from 'overmind-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as actions from './actions'
import { KeodaConfig } from './app'
import { App } from './components'
import * as words from './db.json'

const config: KeodaConfig = {
  onInitialize(ctx) {
    window.addEventListener('hashchange', function (e) {
      const name = window.location.hash.replace('#', '')
      ctx.actions.keoda.select({ name })
    })
  },
  state: {
    keoda: {
      words,
      lexicon: Object.keys(words).sort(),
    },
  },
  actions: {
    keoda: actions,
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