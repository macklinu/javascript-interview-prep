import { flattenArray, NestedArray } from '.'

interface TestCase {
  input: NestedArray
  expected: ReturnType<typeof flattenArray>
}

test.each<TestCase>([
  {
    input: [1, 2, [3, 4, [5, 6], 7], 8, [9, [10, 11]]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
])('flattenArray($input) === $expected', ({ input, expected }) => {
  expect(flattenArray(input)).toEqual(expected)
})
