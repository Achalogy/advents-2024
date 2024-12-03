function organizeInventory(inventory) {
  return inventory.reduce((r, toy) => {
    r[toy.category] ??= {}
    r[toy.category][toy.name] ??= 0
    r[toy.category][toy.name] += toy.quantity
    return r
  }, {})
}