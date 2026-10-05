import * as _ from '../lang'

export const dar = _.word('dar', {
  noun: 'vastness',
  adj: 'vast',
})

export const lidar = _.word('lidar', {
  noun: 'wall',
  adj: 'skimpy',
  etym: () => [_.lil, _.dar],
})
