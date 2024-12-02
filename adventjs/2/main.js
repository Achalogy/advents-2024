function createFrame(names) {
  const width = (Math.max(...names.map(x => x.length))) + 4;
  const borderY = '*'.repeat(width)
  const wrappedNames = names.map(x => "* " + x.padEnd(width-4, " ") + " *").join("\n")

  return borderY + "\n" + wrappedNames + "\n" + borderY
}