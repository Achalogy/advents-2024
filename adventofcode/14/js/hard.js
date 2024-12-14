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

let matrix = Array.from({ length: height }).map(x => Array.from({ length: width }).map(x => "."))

for (let i = 0; i < 100000; i++) {
  robots.forEach((x, r) => {
    let pos = x.pos
    matrix[pos[0]][pos[1]] = "."
    pos = [pos[0] + x.vel[0], pos[1] + x.vel[1]]

    if (pos[0] < 0) pos[0] = height + pos[0]
    if (pos[1] < 0) pos[1] = width + pos[1]
    if (pos[0] >= height) pos[0] %= height;
    if (pos[1] >= width) pos[1] %= width;

    matrix[pos[0]][pos[1]] = "O"
    x.pos = pos
  })

  // await (() => new Promise(resolve => setTimeout(() => {
  //   resolve()
  // })))()
  if (matrix.find(x => x.join("").split(".").filter(x => x).some(x => x.length > 10))) {
    console.log("Segundo #", i + 1)
    console.log(matrix.map(x => x.join("")).join("\n") + "\n")
    break;
  }
}
