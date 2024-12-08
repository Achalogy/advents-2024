import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/8.txt', {
  encoding: 'utf-8'
})

let antennas = {}
let r = 0;

const matrix = input.split("\r\n").map(x => x.split(""))

matrix.map((line, i) => line.map((loc, j) => {
  if (loc != '.') {
    antennas[loc] ??= []
    antennas[loc].push([i, j])
  }
}))

const validPos = (i, j) => {
  if (i < 0 || i >= matrix.length) return false;
  if (j < 0 || j >= matrix[0].length) return false;
  return true;
}

Object.keys(antennas).forEach(an => {
  const antenna = antennas[an]
  for (let i = 0; i < antenna.length; i++) {
    const a = antenna[i]
    for (let j = i + 1; j < antenna.length; j++) {
      const b = antenna[j]

      let dify = a[0] - b[0]
      let difx = a[1] - b[1]


      if (validPos(a[0] + dify, a[1] + difx)) {
        const c = matrix[a[0] + dify][a[1] + difx]
        if (c != '#' && c != an) {
          r++;
          matrix[a[0] + dify][a[1] + difx] = "#"
        }
      }
      if (validPos(a[0] - dify, a[1] - difx)) {
        const c = matrix[a[0] - dify][a[1] - difx]
        if (c != '#' && c != an) {
          r++;
          matrix[a[0] - dify][a[1] - difx] = "#"
        }
      }
      if (validPos(b[0] + dify, b[1] + difx)) {
        const c = matrix[b[0] + dify][b[1] + difx]
        if (c != '#' && c != an) {
          r++;
          matrix[b[0] + dify][b[1] + difx] = "#"
        }
      }
      if (validPos(b[0] - dify, b[1] - difx)) {
        const c = matrix[b[0] - dify][b[1] - difx]
        if (c != '#' && c != an) {
          r++;
          matrix[b[0] - dify][b[1] - difx] = "#"
        }
      }
    }
  }
})

console.log(matrix.map(x => x.join("")).join("\n"))
console.log(r)