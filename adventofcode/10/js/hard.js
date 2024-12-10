import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/10.txt', {
  encoding: 'utf-8'
})

const matrix = input.split("\r\n").map(x => x.split("").map(x => +x))
let visited

const validPos = (i, j) => {
  if (i < 0 || j < 0) return false;
  if (i >= matrix.length || j >= matrix[0].length) return false;
  return true;
}

let count = 0
let score = 0

const recorrer = (i, j) => {
  const c = matrix[i][j]

  if (c == 9) {
    // console.log("Encontrado en", i, j)
    score++;
    visited[i][j] = true;
    return
  }

  for (let a = -1; a < 2; a++) {
    for (let b = -1; b < 2; b++) {
      if (validPos(i + a, j + b) && matrix[i + a][j + b] == c + 1) {
        if(a == -1 || a == 1) {
          if(b == -1 || b == 1) {
            continue
          }
        }
        recorrer(i + a, j + b)
      }
    }
  }
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] == 0) {
      visited = matrix.map(y => y.map(_ => false))
      score = 0
      // console.log("Recorriendo desde", i, j)
      recorrer(i, j)
      // console.log(score)
      count += score;
    }
  }
}

console.log(count)