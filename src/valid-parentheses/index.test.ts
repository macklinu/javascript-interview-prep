import {isValidParentheses} from '.'

test.each([
  {string: '()', expected: true},
  {string: '()[]{}', expected: true},
  {string: '(]', expected: false},
  {string: '([)]', expected: false},
  {string: '{[]}', expected: true},
])('isValidParentheses($string) === $expected', ({string, expected}) => {
  expect(isValidParentheses(string)).toBe(expected)
})
