import * as _ from '.'

export const pal = _.word('pal', {
  noun: 'fesses',
})

export const palaj = _.word('palaj', {
  noun: 'soleil (fesses de feu)',
})

export const palajil = _.word('palajil', {
  noun: 'abricot, juillet',
  etym: () => [_.palaj, _.lil],
  see: () => [_.fruits],
})

export const kepal = _.word('kepal', {
  noun: 'anus',
  etym: () => [_.ke, _.pal],
})

export const hapal = _.word('hapal', {
  noun: 'haut des fesses',
})

export const kepalhama = _.example(
  [_.kepal, _.hama],
  `Prends mon doigt avec ton anus.`
)

export const otajokepal = _.example(
  [_.o, _.tajo, _.kepal],
  `On frappe ton anus avec notre pénis.`
)
