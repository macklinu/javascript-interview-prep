const characterMap: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']',
}

export function isValidParentheses(string: string): boolean {
  let stack: string[] = []
  let characters = string.split('')
  for (let character of characters) {
    let compliment = characterMap[character]
    if (compliment) {
      stack.push(compliment)
    } else if (stack.pop() !== character) {
      return false
    }
  }
  return true
}
