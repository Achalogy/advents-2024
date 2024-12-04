import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/4.txt', {
  encoding: 'utf-8'
})

const next = {
  "X": "M",
  "M": "A",
  "A": "S",
  "S": true
}

let resp = 0;

const matrix = input.split("\n").map(x => x.split("").map(y => y.trim()).filter(y => y));
const checkPos = (i, j) => {
  if (i >= 0 && i < matrix.length && j >= 0) return j <= matrix[i].length
  return false;
}

const check = (i, j, changeI, changeJ) => {
  let t = 4;

  while (t--) {
    if (!checkPos(i, j)) return false;
    let n = next[matrix[i][j]]
    i += changeI;
    j += changeJ;

    if (checkPos(i, j)) {
      if (matrix[i][j] != n) return false;
      {
        n = next[matrix[i][j]]
        if (n === true) {
          return true;
        }
      }
    }
  }
}



matrix.forEach((line, i) => {
  line.forEach((w, j) => {
    if (w == "X") {
      if (check(i, j, -1, 0)) resp++; // up 
      if (check(i, j, -1, 1)) resp++; // upRight 
      if (check(i, j, 0, 1)) resp++; // right 
      if (check(i, j, 1, 1)) resp++; // bottomRight 
      if (check(i, j, 1, 0)) resp++; // bottom 
      if (check(i, j, 1, -1)) resp++; // bottomLeft 
      if (check(i, j, 0, -1)) resp++; // left 
      if (check(i, j, -1, -1)) resp++; // upLeft 
    }
  })
})

console.log(resp)

