export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const sCharacterCount = countCharacters(s)
  for (const char of t) {
    if (sCharacterCount[char] > 0) {
      sCharacterCount[char]--
    } else {
      return false
    }
  }

  return true
}

function countCharacters(string: string): Record<string, number> {
  const map: Record<string, number> = {}
  for (const s of string) {
    map[s] = (map[s] ?? 0) + 1
  }

  return map
}
