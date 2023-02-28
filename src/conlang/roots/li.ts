import * as _ from '../lang'

export const li = _.word('li', {
  noun: 'mouth',
  verb: 'to suck',
})

export const lipa = _.word('lipa', {
  verb: 'to sing',
  etym: () => [_.li, _.pa],
})

export const lipaya = _.word('lipaya', {
  noun: 'wolf',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Adara_%28Canis_lupus%29.jpg/300px-Adara_%28Canis_lupus%29.jpg',
  img_pos: '30%',
  etym: () => [_.lipa, _.ya],
})

export const keli = _.word('keli', {
  noun: 'tongue',
  verb: 'to lick',
  etym: () => [_.ke, _.li],
  exam: () => [_.phraseX('Lick my clit !', _.keli.imp, _.keyin)],
})

export const ligau = _.word('ligau', {
  verb: 'to taste',
  etym: () => [_.li, _.gau],
})
