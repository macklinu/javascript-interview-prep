import {twoStrings} from '.'

test.each([
  {s1: 'and', s2: 'art', expected: 'YES'},
  {s1: 'be', s2: 'cat', expected: 'NO'},
  {s1: 'hello', s2: 'world', expected: 'YES'},
  {s1: 'hi', s2: 'world', expected: 'NO'},
])('twoStrings($s1, $s2) === $expected', ({s1, s2, expected}) => {
  expect(twoStrings(s1, s2)).toEqual(expected)
})
