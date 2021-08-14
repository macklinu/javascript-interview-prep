export function checkMagazine(magazine: string[], note: string[]): boolean {
  let magazineCount = count(magazine)
  let noteCount = count(note)
  return Object.entries(noteCount).every(([noteKey, noteValue]) => {
    let magazineValue = magazineCount[noteKey] ?? 0
    return magazineValue >= noteValue
  })
}

function count(words: string[]): Record<string, number> {
  let map: Record<string, number> = {}
  for (let word of words) {
    map[word] = (map[word] ?? 0) + 1
  }
  return map
}
