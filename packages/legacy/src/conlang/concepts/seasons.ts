import * as _ from '../lang'

export const seasons = _.card('seasons', {
  writ: 'seasons',
  desc: () => `
# Seasons

Seasons take the name of things that grow at that part of the 
year. If the language is ever used in other regions, the words
can be adapted with something regional linked to that time of
year.

* ${_.nounRef(_.egina)}
* ${_.nounRef(_.fena)}
* ${_.nounRef(_.piutaj)}
* ${_.nounRef(_.ulul)}
* ${_.nounRef(_.piuna)}
* ${_.nounRef(_.eri)}
* ${_.nounRef(_.palil)}
* ${_.nounRef(_.pantame)}
* ${_.nounRef(_.kwiyin)}
* ${_.nounRef(_.gopona)}
* ${_.nounRef(_.pona)}
* ${_.nounRef(_.ponale)}
`,
})
