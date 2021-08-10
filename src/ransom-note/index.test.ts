import { checkMagazine } from '.'

interface TestCase {
  magazine: string
  note: string
  expected: boolean
}

test.each<TestCase>([
  {
    magazine: 'give me one grand today night',
    note: 'give one grand today',
    expected: true,
  },
  {
    magazine: 'two times three is not four',
    note: 'two times two is four',
    expected: false,
  },
  {
    magazine: 'ive got a lovely bunch of coconuts',
    note: 'ive got some coconuts',
    expected: false,
  },
])(
  'checkMagazine($magazine, $note) === $expected',
  ({ magazine, note, expected }) => {
    expect(checkMagazine(magazine, note)).toEqual(expected)
  }
)
