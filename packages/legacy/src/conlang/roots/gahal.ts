import * as _ from '../lang'

export const gaxal = _.word('gaxal', {
  noun: 'sky deity',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/J%C3%BApiter_y_Tetis%2C_por_Dominique_Ingres.jpg/330px-J%C3%BApiter_y_Tetis%2C_por_Dominique_Ingres.jpg',
  desc: () => `
[Sky father](https://en.wikipedia.org/wiki/Sky_father)

  `,
  img_pos: '0',
  etym: () => [_.ga, _.al],
  see: () => [_.gods],
})
