type TargetIndices = [number, number]
type Value = number
type Index = number

export function twoSum(
  numbers: number[],
  target: number
): TargetIndices | undefined {
  let indicesMap = new Map<Value, Index>()
  for (let index = 0; index < numbers.length; index++) {
    let value = numbers[index]
    let compliment = indicesMap.get(target - value)
    if (typeof compliment !== 'undefined') {
      return [compliment, index]
    }
    indicesMap.set(value, index)
  }
}
