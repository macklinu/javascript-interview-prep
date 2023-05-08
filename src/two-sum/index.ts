type TargetIndices = [number, number]
type Value = number
type Index = number

export function twoSum(
  numbers: number[],
  target: number
): TargetIndices | undefined {
  const indicesMap = new Map<Value, Index>()
  for (const [index, value] of numbers.entries()) {
    const compliment = indicesMap.get(target - value)
    if (compliment !== undefined) {
      return [compliment, index]
    }

    indicesMap.set(value, index)
  }
}
