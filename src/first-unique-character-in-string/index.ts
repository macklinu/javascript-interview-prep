export function firstUniqueCharacterInString(string: string): number {
  let map: Record<string, number> = {}
  for (let char of string) {
    map[char] = (map[char] ?? 0) + 1
  }
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (map[char] === 1) {
      return i
    }
  }
  return -1
}
