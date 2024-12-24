function findMissingNumbers(nums) {
  const top = Math.max(...nums)
  const oneToNSet = new Set(Array.from({ length: top }, (_, i) => i + 1))
  const numsSet = new Set(nums)
  const r = oneToNSet.difference(numsSet)
  return [...r]
}