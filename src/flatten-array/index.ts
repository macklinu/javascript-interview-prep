export type NestedArray = Array<number | NestedArray>

export function flattenArray(array: NestedArray): number[] {
  let result: number[] = []
  for (let value of array) {
    if (Array.isArray(value)) {
      result.push(...flattenArray(value))
    } else {
      result.push(value)
    }
  }
  return result
}
