import { canBePalindrome } from './canBePalindrome'

interface TestCase {
  string: string
  expected: boolean
}

test.each<TestCase>([
  // @ts-expect-error
  { string: undefined, expected: false } as TestCase,
  { string: '', expected: false },
  { string: 'ab', expected: false },
  { string: 'baa', expected: true },
  { string: 'carrace', expected: true },
  { string: 'racecar', expected: true },
])('canBePalindrome($string) === $expected', ({ string, expected }) => {
  expect(canBePalindrome(string)).toBe(expected)
})
