import * as _ from '../lang'

export const jiM = _.word('ji', {
  id: 'jiM',
  noun: 'memory',
  verb: 'to remember',
  see: () => [_.ji, _.fiji],
})

export const ji10 = _.word('ji', {
  id: 'ji10',
  noun: '10',
})

export const ji = _.word('ji', {
  noun: 'hair',
  verb: 'to remember',
  pos: 'standing, body leaning forward, hair offered ready to be taken',
  see: () => [_.jiM],
})

export const jipa = _.word('jipa', {
  noun: 'remembering',
  desc: () => `Remembering being a god.dess...`,
  etym: () => [_.ji, _.pa],
  see: () => [_.ganes, _.jifi],
})

export const jifi = _.word('jifi', {
  adj: 'humble',
  etym: () => [_.ji, _.fi],
  see: () => [_.nanes, _.jipa],
})

export const gojida = _.word('gojida', {
  noun: 'bear',
  etym: () => [_.go, _.ji, _.oda],
})

export const neji = _.word('neji', {
  noun: 'without hair',
  verb: 'to shave',
})
