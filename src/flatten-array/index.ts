export type NestedArray = Array<number | NestedArray>

export function flattenArray(array: NestedArray): number[] {
  const result: number[] = []
  for (const value of array) {
    if (Array.isArray(value)) {
      result.push(...flattenArray(value))
    } else {
      result.push(value)
    }
  }

  return result
}
