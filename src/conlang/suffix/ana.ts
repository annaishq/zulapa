import { word } from '../keoda'
import * as _ from '../words'

export const ana = word('ana', {
  noun: 'woman',
  adj: 'feminine',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg/330px-032_Waterside_Tree%2C_Kolam_Telagorajo_%2827349860049%29.jpg',
  see: () => [_.anaT, _.subj, _.plants],
})
