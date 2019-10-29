import * as _ from '.'

export const lil = _.word('lil', {
  adj: 'petit.e',
})

export const lilaj = _.word('lilaj', {
  noun: 'étincelle',
  desc: () => `De ${_.lil} petit et ${_.aj} feu.`,
})
