import {findMaxInJaggedArray, type NestedArray} from '.'

test.each([
  {input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0], expected: 100},
])('findMaxInJaggedArray($input) === $expected', ({input, expected}) => {
  expect(findMaxInJaggedArray(input)).toEqual(expected)
})
