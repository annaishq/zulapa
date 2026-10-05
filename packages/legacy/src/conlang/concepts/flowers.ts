import * as _ from '../lang'

export const flowers = _.card('flowers', {
  writ: 'flowers',
  img: 'https://i.redd.it/bpkwv3dg24a61.png',
  img_pos: '100%',
  img_opa: '0.2',
  desc: () => `
# Flowers

Source: https://www.reddit.com/user/etymologynerd

| Flower      | Etymology                       |
| :---------  | :-----------------------------  |
| **Begonia** | Named after *Michel Bégon*, a French governor of Haiti who was an avid plant collector. |
| **Crocus** | From Ancient Greek *krokos*, which could also mean "saffron". Ultimately of Semitic origin.  |
| **Dandelion** | From Old French *dent de lion*, meaning "lion's tooth", in reference to its jagged leaves. |
| **Hydrangea** | A compound of the Ancient Greek words *hydor*, meaning "water" and *angeion*, "vessel". |
| **Marigold** | A fifteenth-century word simply combining *Mary* (in reference to the Virgin) and the color *gold*. |
| **Rhododendron** | Borrowed in the sixteenth century from Latin. Literally meant "rose-tree" in Ancient Greek. |
| **Buttercup** | A merger of two older names for the plant, *butterflower* and *gold cup* (both referred to its color). |
| ${_.dafodil} | The plant of the dead, the Underworld |
`,
})
