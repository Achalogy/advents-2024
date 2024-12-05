function organizeShoes(shoes) {
  let sizes = {}

  shoes.map(x => {
    sizes[x.size] ??= ""
    sizes[x.size] += x.type
  })

  return Object.keys(sizes).map(x => {
    let r = sizes[x].match(/R/g)
    let l = sizes[x].match(/I/g)
    r ??= []
    l ??= []

    const size = Math.min(r.length, l.length)
    return (Array(size).fill(+x)).flat()
  })
}