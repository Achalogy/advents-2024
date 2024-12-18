function drawTable(data) {
  const headersKeys = Object.keys(data[0])
  let headers = headersKeys.map(x => [x, ...data.map(y => y[x])])
  headers.forEach(h => {
    h[0] = h[0].toString().at(0).toUpperCase() + h[0].toString().slice(1)
  })
  const headersLength = headers.map(x =>
    Math.max(...(x.map(y => y.toString().length))))

  const separator = "+" + headersLength.map(x => "-".repeat(x + 2) + "+").join("")
  let resp = separator + "\n"

  for (let i = 0; i < data.length + 1; i++) {
    resp += "|"
    for (let j = 0; j < headers.length; j++) {
      let str = headers?.at(j)?.at(i).toString()

      resp += " " + str.padEnd(headersLength[j], " ") + " |"
    }
    resp += "\n"
    if (i == 0) {
      resp += separator + "\n"
    }
  }
  resp += separator

  return resp
}