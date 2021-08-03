export function canBePalindrome(string: string): boolean {
  if (typeof string !== 'string') {
    return false
  }
  if (string.length < 3) {
    return false
  }
  let counts = countCharacters(string)
  return findOddCharacterCounts(counts) <= 1
}

type CharacterCountMap = Record<string, number>

function countCharacters(string: string): CharacterCountMap {
  let counts: CharacterCountMap = {}
  ;[...string].forEach((character) => {
    if (typeof counts[character] === 'undefined') {
      counts[character] = 0
    }
    counts[character]++
  })
  return counts
}

function findOddCharacterCounts(counts: CharacterCountMap): number {
  return Object.values(counts).filter((count) => count % 2 !== 0).length
}
