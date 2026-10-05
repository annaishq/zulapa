import { makeLang } from '../conlib'
import * as words from './words'

export const { prefix, suffix, word, entry } = makeLang<typeof words>()
