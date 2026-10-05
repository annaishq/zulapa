import * as _ from '../lang'

export const la = _.word('la', {
  noun: 'lips',
  verb: 'to kiss',
})

export const lalo = _.word('lalo', {
  noun: 'kiss',
  etym: () => [_.la, _.lo.adj],
})

export const qela = _.word('qela', {
  noun: 'teeth',
  etym: () => [_.qe, _.la],
})

export const qelasa = _.word('qelasa', {
  noun: 'knife',
  etym: () => [_.qela, _.sax],
})

export const lapa = _.word('lapa', {
  noun: 'voice',
  verb: 'to talk',
  etym: () => [_.la, _.pa],
})

export const lapu = _.word('lapu', {
  noun: 'request',
  verb: 'to request',
  etym: () => [_.lapa, _.u$],
})

// Debout, une jambe derrière soi, tenue par une main (même côté), l'autre devant soi
export const lapalapa = _.word('lapalapa', {
  noun: 'duck',
  etym: () => [_.lapa, _.lapa],
})

// plank pose
export const qelo = _.word('qelo', {
  noun: 'crocodile',
  etym: () => [_.qela, _.oda],
})

// Couché sur le ventre, les bras en arrière, les jambes au-dessus du sol (dos un peu cambré)
export const qawi = _.word('qawi', {
  noun: 'shark',
  etym: () => [_.qela, _.awi],
})

export const lapir = _.word('lapir', {
  verb: 'to announce',
  etym: () => [_.lapa, _.ir],
})

export const gilapa = _.word('gilapa', {
  noun: 'to whisper',
  etym: () => [_.gi, _.lapa],
})

export const lapana = _.word('lapana', {
  noun: 'speech',
  etym: () => [_.lapa, _.na],
})

export const ganek = _.word('ganek', {
  noun: 'word',
  etym: () => [_.ga, _.ek],
})

export const lapanagu = _.word('lanagu', {
  noun: 'insult',
  etym: () => [_.lapana, _.gu],
})

// ==================== ALT
