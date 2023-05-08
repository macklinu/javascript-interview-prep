import {twoSum} from '.'

test.each([
  {numbers: [2, 7, 11, 15], target: 9, expected: [0, 1]},
  {numbers: [3, 2, 4], target: 6, expected: [1, 2]},
  {numbers: [3, 3], target: 6, expected: [0, 1]},
])('twoSum($numbers, $target) === $expected', ({numbers, target, expected}) => {
  expect(twoSum(numbers, target)).toEqual(expected)
})
