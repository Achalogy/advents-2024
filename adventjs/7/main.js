function fixPackages(packages) {
  let res = []

  let insertPos = 0
  let dir = 0

  packages.split("").forEach((x, i) => {
    const isP = Boolean(+(x == "(") + +(x == ")"));
    
    res.splice(
      (i * +!dir) + (insertPos - (insertPos * +!dir)), 0, x.repeat(+!isP)
    )
    
    dir = (dir + +isP) % 2
    insertPos = (insertPos - (insertPos * +isP)) +
      (i - (i * +!isP))
  })

  return res.filter(x => x).join("")
}

console.log(fixPackages("a(cb)de"))