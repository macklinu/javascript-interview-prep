export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  let sCharacterCount = countCharacters(s)
  for (let char of t) {
    if (sCharacterCount[char] > 0) {
      sCharacterCount[char]--
    } else {
      return false
    }
  }
  return true
}

function countCharacters(string: string): Record<string, number> {
  let map: Record<string, number> = {}
  for (let s of string) {
    map[s] = (map[s] ?? 0) + 1
  }
  return map
}
