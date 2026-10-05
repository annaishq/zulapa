import * as _ from '../words'
import { alt, prefix, word } from '../zulapa'

export const nu = prefix('nu', {
  noun: 'feeling',
  adj: 'feminine',
  verb: 'to feel',
  glo: 'FEM',
  join: '',
  see: () => [_.subj],
})

alt('unu', {
  id: 'u-nu',
  glo: 'INF.**feel**',
  cla: 'verb',
  alt: () => _.nu,
})

export const nuda = word('nuda', {
  noun: 'woman, tree',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.nuq, _.toda, _.wida],
  etym: () => [_.nu, _.da],
})

export const yanu = word('yanu', {
  noun: 'crone',
  etym: () => [_.ya, _.nu],
})

export const nuto = word('nuto', {
  verb: 'to breathe into the wind, to take in',
  see: () => [_.tonu, _.nuda, _.toda],
  etym: () => [_.nu, _.to],
})
