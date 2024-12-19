import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/16.txt', {
  encoding: 'utf-8'
})

const dirs = [
  [-1, 0],
  [0, -1], [0, 1],
  [1, 0]
]

const matrix = input.split("\r\n").map(x => x.split(""))

const startY = matrix.findIndex(x => x.includes("S"))
const startX = matrix[startY].indexOf("S")

const endY = matrix.findIndex(x => x.includes("E"))
const endX = matrix[endY].indexOf("E")

let visited = matrix.map(x => x.map(y => false))
let weights = matrix.map(x => x.map(y => Infinity))

let q = []

q.push([startY, startX, 2, 0])
weights[startY][startX] = 0

while (q.length != 0) {
  let move = q.shift()
  visited[move[0]][move[1]] = true;

  for (let dir of dirs) {
    const y = move[0] + dir[0]
    const x = move[1] + dir[1]

    if (matrix[y][x] == "#" || visited[y][x]) continue;
    q.push([y, x, dirs.indexOf(dir), move[3] + 1 + (+(move[2] != dirs.indexOf(dir)) * 1000)])
    weights[y][x] = move[3] + 1 + (+(move[2] != dirs.indexOf(dir)) * 1000)
  }

  q.sort((a, b) => a[3] - b[3])

}
// console.log(matrix.map((x, i) => x.map((y, j) => visited[i][j] ? "O" : y).join("")).join("\n"))

console.log(weights[endY][endX])