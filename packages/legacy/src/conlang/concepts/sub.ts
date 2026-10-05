import * as _ from '../lang'

export const sub = _.card('subordinate', {
  desc: () => `
## Subordinate

* ${_.n} glossed \`${_.n.definition.glo}\`

This marks the verb of a clause as being subordinate of another clause. Examples:

* ${_.phrase('I know (that) she sings.', _.o.gama, _.a.lipa.n)}
* ${_.phrase('She sings (that is a thing that) I know.', _.a.lipa.n, _.o.gama)}
* ${_.phrase('I love (when) you kiss me.', _.o.zu, _.i.la.n, _.mo.m)}
* ${_.phrase('I love kissing.', _.o.ora, _.u.la.n)}
`,
})
