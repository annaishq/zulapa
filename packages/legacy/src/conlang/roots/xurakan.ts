import * as _ from '../lang'

export const xurakan = _.word('xurakan', {
  noun: 'hurricane',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Deity_Figure_%28Zem%C3%AD%29_MET_DP295635.jpg/330px-Deity_Figure_%28Zem%C3%AD%29_MET_DP295635.jpg',
  desc: () => `
Deity or [zemi](https://en.wikipedia.org/wiki/Zemi) of chaos and disorder from the Taïno culture of the Caribbean.


`,
  see: () => [_.gods],
})
