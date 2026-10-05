import * as _ from '../lang'

export const fena = _.word('fena', {
  noun: 'cabbage, February',
  adj: 'layers',
  etym: () => [_.fe, _.na],
  see: () => [_.seasons, _.food],
})

export const feoda = _.word('feoda', {
  noun: 'clothes',
  verb: 'to dress',
  etym: () => [_.fe, _.oda],
})

export const yafe = _.word('yafe', {
  noun: 'pajama',
  etym: () => [_.ya, _.feoda],
})

export const nefe = _.word('nefe', {
  adj: 'naked',
  verb: 'to uncover',
  etym: () => [_.ne, _.fe],
  see: () => [_.saufe],
  desc: () =>
    `Compared to ${_.saufe}, here we highlight nakedness as simply a fact, without "shyness".`,
  exam: () => [
    _.phraseX('Undress (uncover).', _.nefe.imp),
    _.phraseX('Undress (remove clothes).', _.ne.feoda.imp, _.ti.m),
    _.phraseX('Uncover your body.', _.nefe.imp, _.ti.m),
  ],
})

export const saufe = _.word('saufe', {
  adj: 'barren',
  desc: () =>
    `Compared to ${_.nefe}, here the "lack-of" cloth or something covering is more important. There is a "shyness" in ${_.saufe}.`,
  etym: () => [_.sau, _.fe],
  see: () => [_.nefe],
})

export const fepa = _.word('fepa', {
  noun: 'pride',
  see: () => [_.ganes, _.fefi],
})

export const fefi = _.word('fefi', {
  adj: 'adapting',
  see: () => [_.nanes, _.fepa],
})
