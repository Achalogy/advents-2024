function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  let r = []

  while (weight > 0) {
    const num = Object.keys(boxRepresentations).toReversed().find(x => x <= weight)

    let rn = (r[0] ?? "").split("")
    for (let i = 0; i < boxRepresentations[num].at(-1).length; i++) {
      rn[i] = boxRepresentations[num]?.at(-1)[i]
    }
    r[0] = rn.join("").trim()
    r.unshift(...boxRepresentations[num].slice(0, -1))

    weight -= num
  }

  return r.join("\n")
}