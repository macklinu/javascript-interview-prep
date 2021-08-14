import { isAnagram } from '.'

interface TestCase {
  s: string
  t: string
  expected: boolean
}

test.each<TestCase>([
  { s: 'anagram', t: 'nagaram', expected: true },
  { s: 'rat', t: 'car', expected: false },
  { s: 'a', t: 'ab', expected: false },
  { s: 'a', t: 'a', expected: true },
  { s: 'ab', t: 'bae', expected: false },
])('isAnagram($s, $t) === $expected', ({ s, t, expected }) => {
  expect(isAnagram(s, t)).toEqual(expected)
})
