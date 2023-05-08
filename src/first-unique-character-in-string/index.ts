export function firstUniqueCharacterInString(string: string): number {
  const map: Record<string, number> = {}

  for (const char of string) {
    map[char] = (map[char] ?? 0) + 1
  }

  // eslint-disable-next-line unicorn/no-for-loop
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (map[char] === 1) {
      return i
    }
  }

  return -1
}
