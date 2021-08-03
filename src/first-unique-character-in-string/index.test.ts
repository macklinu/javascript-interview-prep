import { firstUniqueCharacterInString } from '.'

test('solves LeetCode test cases', () => {
  expect(firstUniqueCharacterInString('leetcode')).toBe(0)
  expect(firstUniqueCharacterInString('loveleetcode')).toBe(2)
  expect(firstUniqueCharacterInString('aabb')).toBe(-1)
})
