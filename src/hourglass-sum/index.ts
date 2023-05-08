export function hourglassSum(array: number[][]): number {
  const width = array[0].length
  const height = array.length
  let maxSum = Number.MIN_SAFE_INTEGER
  for (let i = 1; i < width - 1; i++) {
    for (let j = 1; j < height - 1; j++) {
      const currentHourglassSum = sum([
        array[i][j],
        array[i - 1][j],
        array[i - 1][j - 1],
        array[i - 1][j + 1],
        array[i + 1][j],
        array[i + 1][j - 1],
        array[i + 1][j + 1],
      ])
      maxSum = Math.max(maxSum, currentHourglassSum)
    }
  }

  return maxSum
}

function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0)
}
