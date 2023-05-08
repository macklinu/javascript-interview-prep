import {hourglassSum} from '.'

test.each([
  {
    input: to2dArray(`
    -9 -9 -9  1 1 1
    0 -9  0  4 3 2
   -9 -9 -9  1 2 3
    0  0  8  6 6 0
    0  0  0 -2 0 0
    0  0  1  2 4 0`),
    sum: 28,
  },
  {
    input: to2dArray(`
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0`),
    sum: 19,
  },
  {
    input: to2dArray(`
    -1 -1 0 -9 -2 -2
    -2 -1 -6 -8 -2 -5
    -1 -1 -1 -2 -3 -4
    -1 -9 -2 -4 -4 -5
    -7 -3 -3 -2 -9 -9
    -1 -3 -1 -2 -4 -5`),
    sum: -6,
  },
])('hourglassSum($input) === $sum', ({input, sum}) => {
  expect(hourglassSum(input)).toEqual(sum)
})

function to2dArray(input: string): number[][] {
  return input
    .split('\n')
    .map((string) => string.split(/\s+/).filter(Boolean).map(Number))
    .filter((array) => array.length > 0)
}
