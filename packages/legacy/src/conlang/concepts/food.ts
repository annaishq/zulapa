import * as _ from '../lang'

export const food = _.card('food', {
  writ: 'food',
  desc: () => `
# Food

See also ${_.fruits}.

* ${_.nounRef(_.doth)}
* ${_.nounRef(_.egina)}
* ${_.nounRef(_.eri)}
* ${_.nounRef(_.fena)}
* ${_.nounRef(_.gopona)}
* ${_.nounRef(_.guyil)}
* ${_.nounRef(_.palil)}
* ${_.nounRef(_.pantame)}
* ${_.nounRef(_.piule)}
* ${_.nounRef(_.piuna)}
* ${_.nounRef(_.piutaj)}
* ${_.nounRef(_.pona)}
* ${_.nounRef(_.ponale)}
* ${_.nounRef(_.ulul)}
* ${_.nounRef(_.kwiyin)}

`,
})
