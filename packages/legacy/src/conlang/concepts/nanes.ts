import * as _ from '../lang'

export const nanes = _.card('nanes', {
  noun: 'scale of na',
  def: 'states of practicality',
  see: () => [_.ganes, _.count],
  desc: () => `
# The scale of mastering ${_.na}

These states correspond to increasing levels of humility and practicality
within ${_.na}, the material, practical world. If these increasing levels
of mastery are not balanced by ${_.ga}, they are just other names for the
machine.

See ${_.ganes} for some explanation on the relation between ${_.ga}, ${_.na},
${_.gu} and ${_.nux}.

## The "flowing" states

These are the difficult (pragmatic) states that need to be cultivated to
balance their equivalent ${_.ganes} (poetic) states.

On their own they can feel dreadful if not enlightenend by some purpose given
by the poetic states. Balancing serves both ways.

* 10 ${_.jifi} (humble) <=> ${_.jipa} (remembering being god.dess)
* 9 ${_.dafi} (serving) <=> ${_.dapa} (joy)
* 8 ${_.jefi} (caring) <=> ${_.jepa} (belonging)
* 7 ${_.fefi} (adapting) <=> ${_.fepa} (pride)
* 6 ${_.shifi} (learning) <=> ${_.shipa} (believing)

## The "territorial" states

These states are the same as the ones on the spirit scale ${_.ganes}.

* 5 ${_.nelil} (confusion/insecure)
* 4 ${_.neqa} (shame/restless)
* 3 ${_.nepe} (limbo/offensive)
* 2 ${_.nede} (anguish/fighting)

## And this is hell

* 1 ${_.nepi} (division/fragmented)
`,
})
