export function canBePalindrome(string: string): boolean {
  if (typeof string !== 'string') return false
  if (string.length < 3) return false
  let counts = countCharacters(string)
  return findOddCharacterCounts(counts) <= 1
}

type CharacterCountMap = { [char: string]: number }

function countCharacters(string: string): CharacterCountMap {
  let counts = {}
  ;[...string].forEach(character => {
    if (counts[character] === void 0) {
      counts[character] = 0
    }
    counts[character]++
  })
  return counts
}

function findOddCharacterCounts(counts: CharacterCountMap): number {
  return Object.values(counts).filter(count => count % 2 !== 0).length
}
