import { IAction, IContext, Overmind } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled from 'styled-components'
import * as actions from './actions'
import { FloatArg } from './actions'
import { CompiledEntriesByType } from './conlib'
export { styled, Comp }

export type Colors = {
  img_opa: string
  body_bg: string
  high_color: string
  writ_btn_bg: string
  wrapper_border: string
  wrapper_shadow: string
  wrapper_bg: string
  // definitions
  definitions_bg: string
  // phrase
  phrase_glo_bg: string
  glo_border: string
  ref_color: string
  aspect_color: string
  writ_color: string
  name_color: string
  open_shadow: string
  compact_trad: string

  glo_color: string
  noun_color: string
  adj_color: string
  verb_color: string
  adv_color: string

  nsfw_bg: string
  nsfw_btn_bg: string
  nsfw_shadow: string
  trad_bg: string
  trad_color: string
  fix_bg: string
  fix_color: string
  // list
  list_bg: string
  // def
  def_color: string
  // def titles:
  def_type: string
  def_text: string
  // main
  main_bg: string
  desc_color: string
  desc_h1: string
  desc_first_h1: string
  desc_h2: string
  desc_h3: string
  desc_h4: string
  desc_h4_bg: string
  desc_h4_border: string
  desc_h5_bg: string
  desc_h5_border: string
  desc_h6_bg: string
  desc_h6_border: string
  desc_a: string
  desc_code: string
  // title
  title_color: string
  title_bg: string
  // selected title
  selected_bg: string
  selected_title: string
  // todo
  suff_bg: string
  suff_shadow: string
  suff_color: string
  suff_border: string
}

export const COLORS: Colors = {
  img_opa: 'var(--img_opa)',
  body_bg: 'var(--body_bg)',
  high_color: 'var(--high_color)',
  writ_btn_bg: 'var(--body_bg)',
  wrapper_border: 'var(--wrapper_border)',
  wrapper_shadow: 'var(--wrapper_shadow)',
  wrapper_bg: 'var(--wrapper_bg)',
  // definitions
  definitions_bg: 'var(--definitions_bg)',
  // phrase
  phrase_glo_bg: 'var(--phrase_glo_bg)',
  glo_border: 'var(--glo_border)',
  ref_color: 'var(--ref_color)',
  aspect_color: 'var(--aspect_color)',
  writ_color: 'var(--writ_color)',
  name_color: 'var(--name_color)',
  open_shadow: 'var(--open_shadow)',
  compact_trad: 'var(--compact_trad)',

  glo_color: 'var(--glo_color)',
  noun_color: 'var(--noun_color)',
  adj_color: 'var(--adj_color)',
  verb_color: 'var(--verb_color)',
  adv_color: 'var(--adv_color)',

  nsfw_bg: 'var(--nsfw_bg)',
  nsfw_btn_bg: 'var(--nsfw_btn_bg)',
  nsfw_shadow: 'var(--nsfw_shadow)',
  trad_bg: 'var(--trad_bg)',
  trad_color: 'var(--trad_color)',
  fix_bg: 'var(--fix_bg)',
  fix_color: 'var(--fix_color)',
  // list
  list_bg: 'var(--list_bg)',
  // def
  def_color: 'var(--def_color)',
  // def titles
  def_type: 'var(--def_type)',
  def_text: 'var(--def_text)',
  // main
  main_bg: 'var(--main_bg)',
  desc_color: 'var(--desc_color)',
  desc_h1: 'var(--desc_h1)',
  desc_first_h1: 'var(--desc_first_h1)',
  desc_h2: 'var(--desc_h2)',
  desc_h3: 'var(--desc_h3)',
  desc_h4: 'var(--desc_h4_color)',
  desc_h4_bg: 'var(--desc_h4_bg)',
  desc_h4_border: 'var(--desc_h4_border)',
  desc_h5_bg: 'var(--desc_h5_bg)',
  desc_h5_border: 'var(--desc_h5_border)',
  desc_h6_bg: 'var(--desc_h6_bg)',
  desc_h6_border: 'var(--desc_h6_border)',
  desc_a: 'var(--desc_a)',
  desc_code: 'var(--desc_code)',
  // title
  title_color: 'var(--title_color)',
  title_bg: 'var(--title_bg)',
  // selected title
  selected_bg: 'var(--selected_bg)',
  selected_title: 'var(--selected_title)',
  // todo
  suff_bg: 'var(--suff_bg)',
  suff_shadow: 'var(--suff_shadow)',
  suff_color: 'var(--suff_color)',
  suff_border: 'var(--suff_border)',
}

export const DARK_COLORS: Colors = {
  img_opa: '0.5',
  body_bg: '#1b011a', // '#955694',
  high_color: '#ffa5003b',
  writ_btn_bg: '#955694',
  wrapper_border: '#6c2f6f',
  wrapper_shadow: '#ff00ff1f',
  wrapper_bg: '#1c001c',
  // definitions
  definitions_bg: '#18021847',
  // phrase
  phrase_glo_bg: '#341e33b8',
  glo_border: '#f000f036',
  ref_color: '#35cdff',
  aspect_color: '#35ff50ba',
  writ_color: '#ff77ffb5',
  name_color: '#ff77ffb5',
  open_shadow: '-100px -100px 300px #000',
  compact_trad: '#ffffff33',

  glo_color: '#ffffff6b',
  noun_color: '#26ffeeaa',
  adj_color: '#91ff77b5',
  verb_color: '#ff964f',
  adv_color: '#ff77ffb5',

  nsfw_bg: '#ffc6592b',
  nsfw_btn_bg: '#ffc65999',
  nsfw_shadow: 'none',
  trad_bg: '#341e33',
  trad_color: '#ffffffae',
  fix_bg: '#ffffff0f',
  fix_color: '#ffffff9e',
  // list
  list_bg: '#2c0f2f52',
  // def
  def_color: '#666',
  // def titles
  def_type: '#ffffff4b',
  def_text: '#a5a5a5',
  // main
  main_bg: '#0f142f52',
  desc_color: '#a5a5a5',
  desc_h1: '#4cfff182',
  desc_first_h1: '#95ff03b8',
  desc_h2: '#4cfff182',
  desc_h3: '#4cfff182',
  desc_h4: '#a9ffa6',
  desc_h4_bg: '#ffc6592b',
  desc_h4_border: '#ffc6598b',
  desc_h5_bg: '#35cdff26',
  desc_h5_border: '#35cdff4f',
  desc_h6_bg: '#312e4463',
  desc_h6_border: '#3d30a063',
  desc_a: '#ff5cff',
  desc_code: '#5cff5c',
  // title
  title_color: '#94ff00',
  title_bg: '#0f001a6e',
  // selected title
  selected_bg: '#59175c',
  selected_title: '#fc84fc',
  // todo
  suff_bg: '#f9f5e4f0',
  suff_shadow: '#33333340',
  suff_color: '#be56be75',
  suff_border: '#a5a399bf',
}

export const LIGHT_COLORS: Colors = {
  img_opa: '0.5',
  body_bg: '#9ca5a7',
  high_color: '#bd7400a8',
  writ_btn_bg: '#aba89d',
  wrapper_border: '#444',
  wrapper_shadow: '#0000001f', // 10px instead of 20px ?
  wrapper_bg: '#636159',
  // definitions
  definitions_bg: '#e4e1d582',
  // phrase
  phrase_glo_bg: '#d0cdc2',
  glo_border: '#888',
  ref_color: '#2c383c',
  aspect_color: '#565656',
  writ_color: '#2c383c50', // opacity: 0.4; color wasn't set.
  name_color: '#2c383c50', // opacity: 0.4; color wasn't set.
  open_shadow: '-100px -100px 300px #0003',
  compact_trad: '#00000044',

  glo_color: '#777',
  noun_color: '#2e4f8c',
  adj_color: '#5c9ab3',
  verb_color: '#883ea7',
  adv_color: '#c371c1',

  nsfw_bg: '#ffa50063',
  nsfw_btn_bg: 'var(--nsfw_bg)',
  nsfw_shadow: 'none',
  trad_bg: '#d0cdc2',
  trad_color: '',
  fix_bg: '#ffffff1a',
  fix_color: 'inherit',
  // list
  list_bg: '#d0cdc261', // margin: 0 0 5px ?
  // def
  def_color: '#666',
  // def titles
  def_type: '#0000004b',
  def_text: '#333',
  // main
  main_bg: 'none', // ??
  desc_color: '#555',
  desc_h1: '#444',
  desc_first_h1: 'inherit',
  desc_h2: '#444',
  desc_h3: '#444',
  desc_h4: 'inherit',
  desc_h4_bg: '#bfb370',
  desc_h4_border: '#88815e',
  desc_h5_bg: '#afada4',
  desc_h5_border: '#908e82',
  desc_h6_bg: '#afada4',
  desc_h6_border: '#908e82',
  desc_a: '#566284',
  desc_code: '#317577',
  // title
  title_color: '#333',
  title_bg: 'var(--main_bg)',
  // selected title
  selected_bg: '#e4d593',
  selected_title: 'inherit',
  // todo
  suff_bg: '#f9f5e4f0',
  suff_shadow: '#33333340',
  suff_color: '#999',
  suff_border: '#a5a399bf',
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

export interface ZulapaConfig {
  onInitialize: (ctx: Overmind<ZulapaConfig>) => void
  state: {
    zulapa: {
      // Show telugu writing
      writ?: boolean
      // Show nsfw content
      nsfw?: boolean
      // Open all phrases in descriptions
      open?: boolean
      dark?: boolean
      selected?: string
      float?: FloatArg
      filter?: Filter
      db: CompiledEntriesByType
      lexicon: Lexicons
    }
  }
  actions: {
    zulapa: typeof actions
  }
}

export type Config = ZulapaConfig

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
export type AsyncAction<Input = void, Output = void> = IAction<
  Config,
  Input,
  Promise<Output>
>

export const useOvermind = createHook<Config>()

export type Context = IContext<Config>
