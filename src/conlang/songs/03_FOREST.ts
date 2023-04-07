import { $, __ } from '../alt/other'
import * as _ from '../lang'

export const forest = _.card('03 - forest', {
  compact: true,
  desc: () => `
${_.phrase('I am the forest', __.o.e, _.junu)}
${_.phrase('Mother of creatures.', _.hanu.wu, _.raj, $)}

${_.phrase(
  'I am the trees and the soil.',
  __.o.e,
  _.unu,
  _.shu,
  _.so,
  _.$comma
)}
${_.phrase('Feeding the small.', _.u.lu.guwulak, _.na.lil.m)}
${_.phrase('Feeding the large.', _.u.lu.guwulak, _.na.hi.m, $)}

${_.phrase('Some are born,', __.es.a.pe.gui, _.$comma)}
${_.phrase('fragile beauties,', _.kiti, _.awi.adj.na)}
${_.phrase('surprised spirits.', _.shehos, _.ga, $)}

${_.phrase('Some are killed,', __.es.a.pe.nemek)}
${_.phrase('hunted, if weak,', _.es.a.nilat, _.eku, _.le.ais)}
${_.phrase('fought, if strong.', _.es.a.nepi, _.eku, _.le.gur, $)}

${_.phrase('I am your eternal mother,', __.o.e, _.ti.lau.hanu, _.$comma)}
${_.phrase('giver of life,', _.a.s, _.a.guwu, _.gui.m)}
${_.phrase('taker of life.', _.a.s, _.a.hajo, _.gui.m, $)}

${_.phrase('You unfold into being,', __.i.nie, _.ru.e, _.$comma)}
${_.phrase('little words on paper,', _.ganek.lil, _.fe.inina, _.$comma)}
${_.phrase('made of wood.', _.mei.nam, $)}

${_.phrase('You will burn to ashes.', _.i.zau.ir, _.ru.kenam)}
${_.phrase('Your words, your story', _.ti.ganek, _.ti.agi)}
${_.phrase('remembered in my flesh.', _.es.sha.ji, _.ro.to.yaunoa, $)}

${_.phrase(
  'I am the book, capturing',
  __.o.e,
  _.djin,
  _.a.s,
  _.a.lu.nul,
  _.$comma
)}
${_.phrase(
  'your every instant, this smile, this cry,',
  _.ti.leiser.m,
  _.$comma,
  _.sij.laj,
  _.$comma,
  _.sij.falam,
  _.$comma
)}
${_.phrase('your skin on your mother,', _.ti.noa, _.fe.ti.hanu.m)}
${_.phrase('your smell in her nose.', _.ti.shena, _.ro.sheu.wu, _.unu.s.m)}

${_.phrase('I am your eternal mother,', __.o.e, _.ti.lau.hanu, _.$comma)}
${_.phrase('giver of life,', _.a.s, _.a.guwu, _.gui.m)}
${_.phrase('taker of life.', _.a.s, _.a.hajo, _.gui.m, $)}

${_.phrase('You crawl into existence,', __.i.adja, _.ruP.gu.noun, _.$comma)}
${_.phrase('surrounded by life', _.ota.adj, _.fu.gu)}
${_.phrase('that you take,', _.a.s.m, _.i.hajo)}
${_.phrase('to become.', _.ibu, _.u.ru, $)}

${_.phrase('You owe me')}
${_.phrase('you.')}

${_.phrase('I am time')}
${_.phrase('Memory')}
${_.phrase('A veil')}
${_.phrase('Bliss.')}
`,
})
