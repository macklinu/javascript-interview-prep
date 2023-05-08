import {checkMagazine} from '.'

test.each([
  {
    magazine: toWordArray('give me one grand today night'),
    note: toWordArray('give one grand today'),
    expected: true,
  },
  {
    magazine: toWordArray('two times three is not four'),
    note: toWordArray('two times two is four'),
    expected: false,
  },
  {
    magazine: toWordArray('ive got a lovely bunch of coconuts'),
    note: toWordArray('ive got some coconuts'),
    expected: false,
  },
])(
  'checkMagazine($magazine, $note) === $expected',
  ({magazine, note, expected}) => {
    expect(checkMagazine(magazine, note)).toEqual(expected)
  }
)

function toWordArray(string: string): string[] {
  return string.split(' ')
}
