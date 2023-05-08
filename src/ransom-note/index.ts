export function checkMagazine(magazine: string[], note: string[]): boolean {
  const magazineCount = count(magazine)
  const noteCount = count(note)
  return Object.entries(noteCount).every(([noteKey, noteValue]) => {
    const magazineValue = magazineCount[noteKey] ?? 0
    return magazineValue >= noteValue
  })
}

function count(words: string[]): Record<string, number> {
  const map: Record<string, number> = {}
  for (const word of words) {
    map[word] = (map[word] ?? 0) + 1
  }

  return map
}
