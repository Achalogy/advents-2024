function createXmasTree(height, ornament) {
  let lenSpaces = height - 1;
  let lenOrnaments = 1;
  let r = []

  while (lenOrnaments <= (height * 2) - 1) {
    let spaces = "_".repeat(lenSpaces)
    r.push(spaces + ornament.repeat(lenOrnaments) + spaces)

    lenOrnaments += 2;
    lenSpaces--;
  }

  let wood = "_".repeat(height - 1) + "#" + "_".repeat(height - 1)
  r.push(wood, wood)

  return r.join("\n")
}