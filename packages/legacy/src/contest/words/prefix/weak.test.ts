import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('weak.prefix', () => {
  it('should not select class', () => {
    expecto(_.ne.la).toBe('nela/NEG.**lips**/noun')
    expecto(_.ne.lapa).toBe('nelapa/NEG.**sing**/verb')
  })
})

describe('weak.suffix', () => {
  it('should pass previous prefix class', () => {
    expecto(_.o).toBe('o/1SG/verb')
    expecto(_.o.ne).toBe('one/1SG.NEG/verb')
  })

  it('should pass to next word', () => {
    expecto(_.o.ne.la).toBe('onela/1SG.NEG.**kiss**/verb')
  })
})
