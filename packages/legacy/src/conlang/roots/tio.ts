import * as _ from '../lang'

export const tio = _.word('tio', {
  noun: 'genitals, sexuality',
  verb: 'to make love',
})

export const fatio = _.word('fatio', {
  noun: 'iris',
  desc: () => 'the flower of the eye',
  etym: () => [_.fa, _.tio],
})

export const tiona = _.word('tiona', {
  noun: 'flower',
  desc: () => 'genital thing',
  etym: () => [_.tio, _.na],
  exam: () => [
    _.phraseX(
      'Kiss my vulva as if you were picking flowers',
      _.la.imp,
      _.si.muhajo,
      _.tiona,
      _.yin.m
    ),
  ],
})
