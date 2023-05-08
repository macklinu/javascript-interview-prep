const directionToAltitude = new Map<string, number>([
  ['U', 1],
  ['D', -1],
])

export function countingValleys(path: string): number {
  let valleysTraversed = 0
  let altitude = 0
  for (const direction of path.split('')) {
    const altitudeChange = directionToAltitude.get(direction) ?? 0
    altitude += altitudeChange
    if (altitude === 0 && direction === 'U') {
      valleysTraversed++
    }
  }

  return valleysTraversed
}
