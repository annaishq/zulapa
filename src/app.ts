import { IAction, IContext, Overmind } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled from 'styled-components'
import * as actions from './actions'
import { FloatArg } from './actions'
import { CompiledEntriesByType } from './conlib'
export { styled, Comp }

export const COLORS = {
  noun: '#2e4f8c',
  adj: '#5c9ab3',
  verb: '#883ea7',
  adv: '#c371c1',
}

export interface Filter {
  type: 'type' | 'word'
  key: string
}

export interface Lexicons {
  word: string[]
  card: string[]
  phrase: string[]
  alt: string[]
}

export interface KeodaConfig {
  onInitialize: (ctx: Overmind<KeodaConfig>) => void
  state: {
    keoda: {
      // Show telugu writing
      writ?: boolean
      // Show nsfw content
      nsfw?: boolean
      selected?: string
      float?: FloatArg
      filter?: Filter
      db: CompiledEntriesByType
      lexicon: Lexicons
    }
  }
  actions: {
    keoda: typeof actions
  }
}

export type Config = KeodaConfig

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
export type AsyncAction<Input = void, Output = void> = IAction<
  Config,
  Input,
  Promise<Output>
>

export const useOvermind = createHook<Config>()

export type Context = IContext<Config>
