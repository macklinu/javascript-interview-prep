import {canBePalindrome} from '.'

test.each([
  {string: undefined, expected: false},
  {string: '', expected: false},
  {string: 'ab', expected: false},
  {string: 'baa', expected: true},
  {string: 'carrace', expected: true},
  {string: 'racecar', expected: true},
])('canBePalindrome($string) === $expected', ({string, expected}) => {
  expect(canBePalindrome(string)).toBe(expected)
})
