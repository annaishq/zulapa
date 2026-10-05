import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('verb', () => {
  it('should create verb', () => {
    expecto(_.o.la).toBe('ola/1SG.**kiss**/verb')
  })

  it('should create verb with prefix', () => {
    expecto(_.o.ne.la).toBe('onela/1SG.NEG.**kiss**/verb')
  })
})
