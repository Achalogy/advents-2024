import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/14.txt', {
  encoding: 'utf-8'
})

const width = 101
const height = 103

const robots = input.split("\r\n").filter(x => x).map(x =>
({
  pos: x.split(" ").at(0).split("=").at(-1).split(",").map(x => +x).toReversed(),
  vel: x.split(" ").at(1).split("=").at(-1).split(",").map(x => +x).toReversed()
})
)

let matrix = Array.from({ length: height }).map(x => Array.from({ length: width }).map(x => 0))

robots.forEach((x, r) => {
  let pos = x.pos
  // console.log(`Robot ${r + 1}`)
  for (let i = 0; i < 100; i++) {
    // console.log(`Segundo ${i + 1}`)

    pos = [pos[0] + x.vel[0], pos[1] + x.vel[1]]

    if (pos[0] < 0) pos[0] = height + pos[0]
    if (pos[1] < 0) pos[1] = width + pos[1]
    if (pos[0] >= height) pos[0] %= height;
    if (pos[1] >= width) pos[1] %= width;

    // console.log(matrix.map(x => x.join("")).join("\n"))
  }
  matrix[pos[0]][pos[1]]++
})

let quadrants = [0, 0, 0, 0]

for (let i = 0; i < Math.floor(height / 2); i++) {
  for (let j = 0; j < Math.floor(width / 2); j++) {

    quadrants[0] += matrix[i][j]
    quadrants[1] += matrix[i][j + Math.ceil(width / 2)]
    quadrants[2] += matrix[i + Math.ceil(height / 2)][j]
    quadrants[3] += matrix[i + Math.ceil(height / 2)][j + Math.ceil(width / 2)]
  }
}

console.log(quadrants.reduce((acc, curr) => acc * curr))