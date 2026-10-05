import * as _ from '../lang'

export const ganes = _.card('ganes', {
  noun: 'scale of ga',
  def: 'states of consciousness',
  see: () => [_.nanes, _.nepa, _.count],
  desc: () => `
This theme is part of ${_.gana} mythology and world-view.

# The scale ${_.ga}

These states correspond to increasing intensity of ${_.ga} and if they are
not balanced by increasing practicality and material humility ${_.na},
they are just other names for hubris or psychosis or just craziness (${_.maga}).

Here is a map of the relation between ${_.gu}, ${_.ga}, ${_.nux} and ${_.na}.

~~~
ga                 gana
                  /
                /
              /
ganes       /
          /
        /
gu    /
    /
nugu  nu    nanes    na
~~~

The \`/\` diagonal between ${_.gunux} and ${_.gana} represent **integration**. Distances
from this diagonal represent some level of psychosis (above) or dissociation
(below).

As you can see, the only way to escape the terror of ${_.gunux} is to reach
${_.gana} (earth), not ${_.guna} (dissociation, robot) nor ${_.ganux} (psychosis, god-child).

In reality, ${_.gunux} and ${_.gana} are folded together and are the same
thing. The growth of the spirit is just a way to come back to the childhood
of the spirit. It is the same but it is not the same, like looking at
your loved one with or without alzheimer. The loved one is the same but
the experience is not.

## The euphoric states

These need to be balanced with their equivalent ${_.nanes} states.

* 10 ${_.jipa} (remembering being god.des) <=> ${_.jifi} (humble)
* 9 ${_.dapa} (joy) <=> ${_.dafi} (serving)
* 8 ${_.jepa} (belonging) <=> ${_.jefi} (caring)
* 7 ${_.fepa} (pride) <=> ${_.fefi} (adapting)
* 6 ${_.shipa} (believing) <=> ${_.shifi} (learning)

## The "territorial" states.

From here, the states are more difficult. These states are shared on both
${_.ganes} and ${_.nanes} scales.

* 5 ${_.nelil} (confusion/insecure)
* 4 ${_.neqa} (shame/restless)
* 3 ${_.nepe} (limbo/offensive)
* 2 ${_.nede} (anguish/fighting)

## And this is hell

* 1 ${_.nepi} (division/fragmented)
`,
})
