import { $, __ } from '../alt/other'
import * as _ from '../lang'

export const Anyushka = _.word('Anyushka', {
  noun: 'Anyushka',
})

export const Aima = _.word('Aima', {
  noun: 'Aima',
})

export const anyushka = _.card('zz - SONG "ANYUSHKA"', {
  compact: true,
  desc: () => `

${_.phrase('I am Anyushka,', __.o.e, Anyushka, _.$comma)}
${_.phrase('the small door', _.jaja.lil)}
${_.phrase('in you,', _.ro.ti, _.$comma)}
${_.phrase('to the world', _.ru.gana)}

${_.phrase('out', _.ri.pa)}
${_.phrase('out', _.ri.pa)}
${_.phrase('out', _.ri.pa, $)}

${_.phrase('I am the door', __.o.e, _.jaja)}
${_.phrase('to the rain', _.ru.gai, _.$comma)}
${_.phrase('to the birds', _.ru.wi, _.$comma)}
${_.phrase('to the songs', _.ru.lapa)}

${_.phrase('out...', _.ri.pa, $)}

${_.phrase('I am so small,', __.o.e, _.le.lil)}
${_.phrase('feeling trapped,,', _.le.u.lu.nomy, _.le.qet, _.$comma)}
${_.phrase('crazy, wild,', _.nega, _.$comma, _.lat, _.$comma)}
${_.phrase('vulnerable, curious', _.zulus, _.$comma, _.doji)}

${_.phrase('out...', _.ri.pa, $)}

${_.phrase('I need', __.o.xis)}
${_.phrase('you to listen', _.i.agu.n)}
${_.phrase('when I scream,', _.da, _.o.sheropa.n)}
${_.phrase('when I love', _.da, _.o.zu.n)}

${_.phrase('out...', _.ri.pa, $)}

${_.phrase('You are Aima,', __.i.e, Aima, _.$comma)}
${_.phrase('the large wings', _.xi.kis)}
${_.phrase('behind me', _.no.mo)}
${_.phrase('to fly', _.ibu, _.u.meshe)}

${_.phrase('In', _.ro.pa)}
${_.phrase('In', _.ro.pa)}
${_.phrase('In', _.ro.pa, $)}

${_.phrase('I need', __.o.xis)}
${_.phrase('you my love', _.ti, _.zu.mo)}
${_.phrase('to listen', _.i.agu.n)}
${_.phrase('and let us', _.shu, _.i.loqu.n)}

${_.phrase('dance !', _.sho.meny.lei)}
${_.phrase('dance !', _.sho.meny.lei)}
${_.phrase('dance !', _.sho.meny.lei)}

${_.phrase('As only', __.kusi, _.nur)}
${_.phrase('together', _.shim)}
${_.phrase('we can', _.sho.eja, $)}
${_.phrase('oh dear', __.wa, _.je)}

${_.phrase('dance', _.u.meny)}
${_.phrase('dance', _.u.meny)}
${_.phrase('dance', _.u.meny)}
  `,
})
