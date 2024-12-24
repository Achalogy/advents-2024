function generateGiftSets(gifts) {
  const inds = {}
  const q = gifts.map((x, i) => {
    inds[x] = i
    return [x]
  })
  const l = [...q]

  while (q.length) {
    const g = q.shift()

    const i = inds[g?.at(-1)]

    const nG = gifts.slice(i + 1)
    for (const pg of nG) {
      l.push([...g, pg])
      q.push([...g, pg])
    }
  }

  return l
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
