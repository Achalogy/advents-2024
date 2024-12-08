function drawRace(indices, length) {
  return indices.map((x, i) => {
    let arr = "~".repeat(length).split("")

    arr[(length * +(x < 0)) + x] = ["~", "r"][+(x != 0)]

    return " ".repeat(indices.length - (i + 1)) + arr.join("") + " /" + (i + 1)
  }).join("\n")
}