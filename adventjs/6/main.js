function inBox(box) {
  const len = box.at(0).length - 2
  let r = 0;
  let q = 0;

  box.forEach((x, i) => {
    const isBorder = !Boolean(i % (box.length - 1));

    const reg = new RegExp("#{" +
      ((len + 1) - ((len + 1) * +!isBorder)) + "}" +
      ("[[\\s\\*]{" + len + "}").repeat(+!isBorder) + "#")

    q += x.includes("*")

    r += +!x.match(reg);
  })

  return !Boolean(r + !q);
}

console.log(
  inBox([
    "#*###",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])
)