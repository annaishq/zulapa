import * as _ from '..'

export const plants = _.card('plants', {
  lang: 'plants',
  desc: () => `
The word for "plant" is ${_.ina}, the caressing thing. Note that not all
plants have the ${_.ina} suffix.

See also ${_.food}, ${_.fruits} and ${_.seasons}.

This is the list of words related to plants currently in the language:

* ${_.bisahina} (fern)
* ${_.ana} (tree)
* ${_.ananoa} (bark)
* ${_.anama} (leaf)
* ${_.anarum} (branch)
* ${_.anasame} (root)
* ${_.buni} (bud)
* ${_.soaji} (grass)

`,
})
