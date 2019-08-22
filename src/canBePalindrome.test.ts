import { canBePalindrome } from './canBePalindrome'

test('all', () => {
  expect(canBePalindrome(void 0)).toBe(false)
  expect(canBePalindrome('')).toBe(false)
  expect(canBePalindrome('ab')).toBe(false)
  expect(canBePalindrome('baa')).toBe(true)
  expect(canBePalindrome('carrace')).toBe(true)
  expect(canBePalindrome('racecar')).toBe(true)
})
