export function canBePalindrome(string: string | undefined): boolean {
  if (typeof string !== 'string') {
    return false
  }

  if (string.length < 3) {
    return false
  }

  const counts = countCharacters(string)
  return findOddCharacterCounts(counts) <= 1
}

type CharacterCountMap = Record<string, number>

function countCharacters(string: string): CharacterCountMap {
  const counts: CharacterCountMap = {}
  for (const character of string) {
    if (counts[character] === undefined) {
      counts[character] = 0
    }

    counts[character]++
  }

  return counts
}

function findOddCharacterCounts(counts: CharacterCountMap): number {
  return Object.values(counts).filter((count) => count % 2 !== 0).length
}
