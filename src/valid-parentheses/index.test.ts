import { isValidParentheses } from '.'

interface TestCase {
  string: string
  expected: boolean
}

test.each<TestCase>([
  { string: '()', expected: true },
  { string: '()[]{}', expected: true },
  { string: '(]', expected: false },
  { string: '([)]', expected: false },
  { string: '{[]}', expected: true },
])('isValidParentheses($string) === $expected', ({ string, expected }) => {
  expect(isValidParentheses(string)).toBe(expected)
})
