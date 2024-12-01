function prepareGifts(gifts) {
  // Code here
  return [...new Set(gifts)].sort((a, b) => a - b)
}
