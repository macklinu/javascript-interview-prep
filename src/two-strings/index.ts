export function twoStrings(s1: string, s2: string): 'YES' | 'NO' {
  let sharedCharacters = intersection(toCharacterSet(s1), toCharacterSet(s2))
  return sharedCharacters.size > 0 ? 'YES' : 'NO'
}

function toCharacterSet(string: string): Set<string> {
  return new Set(string.split(''))
}

function intersection<TValue>(
  set1: Set<TValue>,
  set2: Set<TValue>
): Set<TValue> {
  return new Set(Array.from(set1.values()).filter((value) => set2.has(value)))
}
