import * as _ from '../lang'

export const jom = _.word('jom', {
  noun: 'clan',
  desc: () => 'Can also mean "group" or "family" depending on context.',
})

export const junu = _.word('junu', {
  noun: 'forest',
  verb: 'to explore',
  img: 'turning_red_forest.jpg',
  img_pos: '100%',
  etym: () => [_.jom, _.nu],
  desc: () => `
  
  
  .
  
  .

  .

  .

  .

  .
  
  `,
})
