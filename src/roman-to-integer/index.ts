const symbolToValue = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
])

export function romanToInteger(string: string): number {
  const symbols = string.split('')

  let total = 0

  for (let i = symbols.length - 1; i >= 0; i--) {
    const value = symbolToValue.get(symbols[i]) ?? 0
    const nextValue = symbolToValue.get(symbols[i + 1]) ?? 0

    if (value < nextValue) {
      total -= value
    } else {
      total += value
    }
  }

  return total
}
