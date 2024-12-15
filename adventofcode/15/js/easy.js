import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/15.txt', {
  encoding: 'utf-8'
})

let [mapBoxes, movements] = input.split("\r\n\r\n")
mapBoxes = mapBoxes.split("\r\n").map(x => x.split(""))
movements = movements.split("\r\n").join("")

const directions = {
  "^": [-1, 0],
  ">": [0, 1],
  "v": [1, 0],
  "<": [0, -1]
}

let y = mapBoxes.findIndex((x) => x.includes("@"))
let x = mapBoxes[y].indexOf("@")

for (let i = 0; i < movements.length; i++) {
  const m = movements[i]
  const move = directions[m]

  // console.log("Move:", m)

  let _y = y;
  let _x = x;

  let times = 0;

  do {
    _y += move[0]
    _x += move[1]
    times++;
  } while (mapBoxes[_y][_x] == "O")

  if (mapBoxes[_y][_x] == "#") continue;

  // console.log(times)

  for (let i = times; i > 0; i--) {
    mapBoxes[y + (move[0] * i)][x + (move[1] * i)] = mapBoxes[y + (move[0] * (i - 1))][x + (move[1] * (i - 1))]
  }
  mapBoxes[y][x] = '.'

  y += move[0]
  x += move[1]

  // mapBoxes[y][x] = '@'
}

let resp = 0

for(let i = 0; i < mapBoxes.length; i++) {
  for(let j = 0; j < mapBoxes[0].length; j++) {
    if(mapBoxes[i][j] == "O") resp += (i * 100) + j
  }
}

console.log(mapBoxes.map(x => x.join("")).join("\n"))
console.log(resp)
