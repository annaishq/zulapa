import * as _ from '../lang'
import { prefix } from '../zulapa'

// TODO: check the glossing with this word...
export const pe = _.word('pe', {
  def: 'some',
  glo: 'INDF',
  noun: '3',
  suff: 'some',
  see: () => [_.mun, _.count],
  pos: 'two legs and a buttock (doggy style)',
})

export const pena = _.word('pena', {
  noun: 'something',
  etym: () => [_.pe, _.na],
})

prefix('ape', {
  id: 'a-pe',
  def: 'some',
  glo: 'they.INDF',
  cla: 'verb',
})

prefix('Ape', {
  id: '$cap-a-pe',
  def: 'some',
  glo: 'they.INDF',
  cla: 'verb',
})

// FIXME: ALL THIS IS ALL WRONG NOW

export const peda = _.word('peda', {
  noun: 'someone',
  etym: () => [_.pe, _.da],
  see: () => [_.subj],
})

export const pesen = _.word('pesen', {
  noun: 'some place',
  etym: () => [_.pe, _.sen],
  see: () => [_.subj],
})

export const hamape = _.word('hamape', {
  noun: 'middle finger',
  etym: () => [_.thama, _.pe],
  pos: '(mun) indicated by thumb against middle finger',
})

export const nepe = _.word('nepe', {
  noun: 'limbo (forgetting "pa")',
  adj: 'offensive',
  see: () => [_.ganes, _.nanes],
})
