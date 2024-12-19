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
let directionsTaken = matrix.map(x => x.map(y => []))

let q = []

let paths = []
let min = Infinity

q.push([startY, startX, 2, 0, []])
weights[startY][startX] = 0

while (q.length != 0) {
  let move = q.shift()
  visited[move[0]][move[1]] = true;

  for (let dir of dirs) {
    const y = move[0] + dir[0]
    const x = move[1] + dir[1]

    const nDir = dirs.indexOf(dir)
    const nWeight = move[3] + 1 + (+(move[2] != nDir) * 1000)

    if (matrix[y][x] == "#") continue;
    if (visited[y][x] && (directionsTaken[y][x].includes(nDir) && nWeight > weights[y][x])) continue;

    q.push([y, x, nDir, nWeight, [...move[4], [move[0], move[1]]]])
    weights[y][x] = nWeight
    directionsTaken[y][x].push(nDir)
  }

  q.sort((a, b) => a[3] - b[3])

  if (move[0] == endY && move[1] == endX) {
    paths.push(move)
    min = Math.min(min, move[3])
  }
}

paths.filter(x => x[3] == min).map(p => {

  p[4].map(y => {
    const [a, b] = y

    matrix[a][b] = "O"
  })

})

console.log(matrix.map((x, i) => x.join("")).join("\n"))
console.log(matrix.flat().reduce((acc, curr) => acc + +(curr == "O"), 0) + 1)

console.log(min)