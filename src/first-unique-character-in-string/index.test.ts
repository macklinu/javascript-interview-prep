import { firstUniqueCharacterInString } from '.'

interface TestCase {
  string: string
  expected: number
}

test.each<TestCase>([
  { string: 'leetcode', expected: 0 },
  { string: 'loveleetcode', expected: 2 },
  { string: 'aabb', expected: -1 },
])(
  'firstUniqueCharacterInString($string) === $expected',
  ({ string, expected }) => {
    expect(firstUniqueCharacterInString(string)).toBe(expected)
  }
)
