export function twoStrings(s1: string, s2: string): 'YES' | 'NO' {
  const sharedCharacters = intersection(toCharacterSet(s1), toCharacterSet(s2))
  return sharedCharacters.size > 0 ? 'YES' : 'NO'
}

function toCharacterSet(string: string): Set<string> {
  return new Set(string.split(''))
}

function intersection<Value>(set1: Set<Value>, set2: Set<Value>): Set<Value> {
  return new Set(Array.from(set1.values()).filter((value) => set2.has(value)))
}
