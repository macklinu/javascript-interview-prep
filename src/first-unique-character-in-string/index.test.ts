import {firstUniqueCharacterInString} from '.'

test.each([
  {string: 'leetcode', expected: 0},
  {string: 'loveleetcode', expected: 2},
  {string: 'aabb', expected: -1},
])(
  'firstUniqueCharacterInString($string) === $expected',
  ({string, expected}) => {
    expect(firstUniqueCharacterInString(string)).toBe(expected)
  }
)
