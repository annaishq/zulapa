import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('word.mixed', () => {
  it('should work as word', () => {
    expecto(_.gu).toBe('gu/**darkness**/noun')
  })

  it('should work as adj', () => {
    expecto(_.la.gu).toBe('lagu/**lips**.*dark*/noun')
  })

  it('should work as adv', () => {
    expecto(_.o.la.gu).toBe('olagu/1SG.**kiss**.*lively*/verb')
  })
})
