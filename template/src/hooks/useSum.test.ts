import { useSum } from './useSum'
describe('useSum', () => {
  it('should return 8 for 4+4', () => {
    expect(useSum(4, 4)).toBe(8)
  })
})
