const symbolToValue: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

export function romanToInteger(string: string): number {
  let symbols = string.split('')
  return symbols.reduceRight((total, symbol, index) => {
    let value = symbolToValue[symbol]
    let nextValue = symbolToValue[symbols[index + 1]]
    if (value < nextValue) {
      return total - value
    }
    return total + value
  }, 0)
}
