import * as _ from '../lang'

export const thao = _.word('thao', {
  noun: 'buste',
  etym: () => [_.tha, _.oda],
  exam: () => [
    _.phraseX('Remove the clothes on your chest.', _.nefe.imp, _.thao.ti.m),
  ],
})

export const thaopa = _.word('thaopa', {
  verb: 'to yell',
  etym: () => [_.thao, _.pa],
})

// ==== alt
