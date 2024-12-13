/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  // Code here
  const values = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100
  }
  let last = 0
  const resp = ornaments.split("").reduceRight((acc, curr) => {
    let r = acc + (values[curr] - ((2 * (last > values[curr])) * (values[curr])))
    last = values[curr]
    return r
  }, 0)
  return isNaN(resp) ? undefined : resp
}