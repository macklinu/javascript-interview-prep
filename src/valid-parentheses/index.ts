const characterMap = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
])

export function isValidParentheses(string: string): boolean {
  const stack: string[] = []
  const characters = string.split('')
  for (const character of characters) {
    const compliment = characterMap.get(character)
    if (compliment) {
      stack.push(compliment)
    } else if (stack.pop() !== character) {
      return false
    }
  }

  return true
}
