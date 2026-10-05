import * as _ from '../lang'

export const fruits = _.card('fruits', {
  writ: 'fruits',
  desc: () => `
Existing fruits are:

* ${_.nounRef(_.eri)}
* ${_.nounRef(_.gopona)}
* ${_.nounRef(_.guyil)}
* ${_.nounRef(_.palil)}
* ${_.nounRef(_.pantame)}
* ${_.nounRef(_.pona)}
* ${_.nounRef(_.ponale)}
* ${_.nounRef(_.kwiyin)}
* ${_.nounRef(_.palapon)}

`,
})
