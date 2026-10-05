import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('joinMorphemes', () => {
  it('should remove double vowel', () => {
    expecto(_.ma.al).toBe('malal/**hand**.*sky*/noun')
  })
})
