import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/12.txt', {
  encoding: 'utf-8'
})

const matrix = input.split("\r\n").map(x => x.split(""))

let validPos = (i, j) => {
  if (i < 0 || i >= matrix.length) return false;
  if (j < 0 || j >= matrix[0].length) return false;
  return true;
}

let visited = matrix.map(x => x.map(y => false))
let count = 0;
let borders = 0;

const spread = (c, a, b) => {
  count++;
  visited[a][b] = true;
  ([
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]).map(([i, j]) => {
    if (!validPos(a + i, b + j)) return borders++
    if (matrix[a + i][b + j] != c) return borders++
    if (!visited[a + i][b + j]) return spread(c, a + i, b + j)
  })
}

let resp = 0;

matrix.forEach((line, i) => {
  line.forEach((x, j) => {
    if (visited[i][j]) return
    count = 0;
    borders = 0
    spread(x, i, j)
    console.log(matrix[i][j], count, borders)
    resp += count * borders
  })
})

console.log(resp)