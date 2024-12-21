/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  let _expected = [...expected]

  let missing = {}
  let extra = {}

  received.forEach((r) => {
    if (!expected.includes(r)) {
      extra[r] ??= 0
      extra[r]++;
    } else
      expected.splice(
        expected.indexOf(r), 1
      )
  })

  expected = _expected

  expected.forEach((r) => {
    if (!received.includes(r)) {
      missing[r] ??= 0
      missing[r]++;
    } else
      received.splice(
        received.indexOf(r), 1
      )
  })

  return {
    missing,
    extra
  }
}
