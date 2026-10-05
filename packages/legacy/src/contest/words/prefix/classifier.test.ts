import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('classifier', () => {
  it('should select verb', () => {
    expecto(_.o.lapa).toBe('olapa/1SG.**sing**/verb')
    expecto(_.i.lapa).toBe('ilapa/2SG.**sing**/verb')
  })

  it('should select verb with suffix', () => {
    expecto(_.o.lapa.ir).toBe('olapalir/1SG.**sing**.FUT/verb')
  })

  it('should select adv', () => {
    expecto(_.si.gu).toBe('sigu/ADV.*lively*/adv')
  })

  it('should select adj', () => {
    expecto(_.le.gu).toBe('legu/ADJ.*dark*/adj')
  })
})
