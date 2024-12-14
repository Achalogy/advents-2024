/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  // Code here
  stables = stables.sort()
  return reindeer.sort().reduce((acc, curr, i) => acc + Math.abs(curr - stables[i]), 0)
}
