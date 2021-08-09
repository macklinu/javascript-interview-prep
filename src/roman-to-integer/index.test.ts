import { romanToInteger } from '.'

interface TestCase {
  roman: string
  integer: number
}

test.each<TestCase>([
  { roman: 'III', integer: 3 },
  { roman: 'IV', integer: 4 },
  { roman: 'IX', integer: 9 },
  { roman: 'LVIII', integer: 58 },
  { roman: 'MCMXCIV', integer: 1994 },
  { roman: 'MCMLXXXIV', integer: 1984 },
  { roman: 'LD', integer: 450 },
])('romanToInteger($roman) === $integer', ({ roman, integer }) => {
  expect(romanToInteger(roman)).toEqual(integer)
})
