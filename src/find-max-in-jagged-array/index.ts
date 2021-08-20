export type NestedArray = Array<number | NestedArray>

export function findMaxInJaggedArray(input: NestedArray): number {
  let max = Number.MIN_SAFE_INTEGER

  for (let value of input) {
    let element = Array.isArray(value) ? findMaxInJaggedArray(value) : value
    if (element > max) {
      max = element
    }
  }

  return max
}
