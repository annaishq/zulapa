import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('tens', () => {
  it('should add glo suffix', () => {
    expecto(_.o.la.em).toBe('olalem/1SG.**kiss**.PST/verb')
  })
})
