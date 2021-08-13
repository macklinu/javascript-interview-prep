import { countingValleys } from '.'

interface TestCase {
  path: string
  valleysTraversed: number
}

test.each<TestCase>([
  { path: 'UDDDUDUU', valleysTraversed: 1 },
  { path: 'DDUUDDUDUUUD', valleysTraversed: 2 },
])(
  'countingValleys($steps, $path) === $valleysTraversed',
  ({ path, valleysTraversed }) => {
    expect(countingValleys(path)).toEqual(valleysTraversed)
  }
)
