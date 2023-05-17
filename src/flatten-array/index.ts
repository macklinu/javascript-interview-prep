export type NestedArray<T> = Array<T | NestedArray<T>>

export function flattenArray<T>(array: NestedArray<T>): T[] {
  const result: T[] = []
  for (const value of array) {
    if (Array.isArray(value)) {
      result.push(...flattenArray(value))
    } else {
      result.push(value)
    }
  }

  return result
}
