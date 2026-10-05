import * as _ from '../lang'

export const bisa = _.word('bisa', {
  noun: 'spore',
})

export const bisajoda = _.word('bisajoda', {
  noun: 'mushroom',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lycoperdon-perlatum-flaschenstaeubling-alt.jpg/330px-Lycoperdon-perlatum-flaschenstaeubling-alt.jpg',
  etym: () => [_.bisa, _.joda],
})

export const bisahina = _.word('bisahina', {
  noun: 'fern',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Athyrium_filix-femina.jpg/330px-Athyrium_filix-femina.jpg',
  etym: () => [_.bisa, _.ina],
  see: () => [_.plants],
})
