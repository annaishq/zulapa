import * as _ from '.'

export const bo = _.word('bo', {
  noun: '**belly**',
})

export const robo = _.word('robo', {
  noun: '**belly button**',
  etym: () => [_.ro, _.bo],
})
