import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('prefixAndVerb', () => {
  it('should work as prefix', () => {
    expecto(_.ju.la).toBe('jula/ANTE.**lips**/noun')
    expecto(_.o.ju.la).toBe('ojula/1SG.ANTE.**kiss**/verb')
  })

  it('should work as verb', () => {
    expecto(_.o.juV).toBe('oju/1SG.**begin**/verb')
  })
})
