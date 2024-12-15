import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/15.txt', {
  encoding: 'utf-8'
})

let [mapBoxes, movements] = input.split("\r\n\r\n")
mapBoxes = mapBoxes.split("\r\n").map(x => x.split("").flatMap(x => {
  switch (x) {
    case '.': return ['.', '.'];
    case '#': return ['#', '#'];
    case 'O': return ['[', ']'];
    case '@': return ['@', '.'];
  }
}))
movements = movements.split("\r\n").join("")

const directions = {
  "^": [-1, 0],
  ">": [0, 1],
  "v": [1, 0],
  "<": [0, -1]
}

let y = mapBoxes.findIndex((x) => x.includes("@"))
let x = mapBoxes[y].indexOf("@")

const moverCajas = (newMap, i, j, move) => {
  let d = newMap[i][j] == "[" ? 0 : -1

  let q = []
  let rBoxes = []

  q.push([i, j + d])
  rBoxes.push([i, j + d])

  while (q.length > 0) {
    let box = q.shift()
    // console.log(box)

    if (
      ["[", "]"].includes(newMap[box[0] + move[0]][box[1] + move[1]])
    ) {
      let _d = newMap[box[0] + move[0]][box[1] + move[1]] == "[" ? 0 : -1
      if (!rBoxes.map(x => x.join("-")).includes([box[0] + move[0], box[1] + move[1] + _d].join("-"))) {
        q.push([box[0] + move[0], box[1] + move[1] + _d])
        rBoxes.push([box[0] + move[0], box[1] + move[1] + _d])
      }
    }
    if (
      ["[", "]"].includes(newMap[box[0] + move[0]][box[1] + move[1] + 1])
    ) {
      let _d = newMap[box[0] + move[0]][box[1] + move[1] + 1] == "[" ? 0 : -1
      if (!rBoxes.map(x => x.join("-")).includes([box[0] + move[0], box[1] + move[1] + 1 + _d].join("-"))) {
        q.push([box[0] + move[0], box[1] + move[1] + 1 + _d])
        rBoxes.push([box[0] + move[0], box[1] + move[1] + 1 + _d])
      }
    }
  }

  rBoxes = rBoxes.map(x => x.join("-"))
  rBoxes = [...new Set(rBoxes)]
  rBoxes = rBoxes.map(x => x.split("-").map(y => +y))
  rBoxes = rBoxes.filter(x => newMap[x[0]][x[1]] == "[")

  if (!rBoxes.every(box => {

    if (newMap[box[0] + move[0]][box[1] + move[1]] == "#") return false;
    if (newMap[box[0] + move[0]][box[1] + move[1] + 1] == "#") return false;
    return true
  })) return false;

  // console.log(rBoxes)

  const deletePos = (a, b) => {
    if(rBoxes.some(x => a == (x[0] + move[0]) && (
      (x[1] + move[1]) == b ||
      (x[1] + move[1] + 1) == b
    ))) return;

    newMap[a][b] = "."
  }

  rBoxes.forEach(box => {
    deletePos(box[0], box[1])
    deletePos(box[0], box[1] + 1)

    newMap[box[0] + move[0]][box[1] + move[1]] = "["
    newMap[box[0] + move[0]][box[1] + move[1] + 1] = "]"
  })

  return true;
}

console.log(mapBoxes.map(x => x.join("")).join("\n") + "\n")
for (let i = 0; i < movements.length; i++) {
  const m = movements[i]
  const move = directions[m]
  let canMove = true

  let newMap = [...mapBoxes.map(x => [...x])]

  if(newMap[y + move[0]][x + move[1]] == "#") continue;

  if (["[", "]"].includes(mapBoxes[y + move[0]][x + move[1]])) {
    canMove = moverCajas(newMap, y + move[0], x + move[1], move)
  }

  if (canMove) {
    newMap[y][x] = '.'
    newMap[y + move[0]][x + move[1]] = "@"
    y = y + move[0]
    x = x + move[1]
    mapBoxes = newMap
  }

  // console.log(newMap.map(x => x.join("")).join("\n") + "\n")

  // await (() => new Promise(resolve => setTimeout(() => {
  //   resolve()
  // }, 10)))()
}

let resp = 0

for (let i = 0; i < mapBoxes.length; i++) {
  for (let j = 0; j < mapBoxes[0].length; j++) {
    if (mapBoxes[i][j] == "[") resp += (i * 100) + j
  }
}

console.log(mapBoxes.map(x => x.join("")).join("\n"))
console.log(resp)
console.log(movements.length)
