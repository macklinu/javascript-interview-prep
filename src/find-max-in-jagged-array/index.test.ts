import { findMaxInJaggedArray, NestedArray } from '.'

interface TestCase {
  input: NestedArray
  expected: number
}

test.each<TestCase>([
  { input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0], expected: 100 },
])('findMaxInJaggedArray($input) === $expected', ({ input, expected }) => {
  expect(findMaxInJaggedArray(input)).toEqual(expected)
})
