import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/4.txt', {
  encoding: 'utf-8'
})

let resp = 0;

const matrix = input.split("\n").map(x => x.split("").map(y => y.trim()).filter(y => y));
const checkPos = (i, j) => {
  if (i >= 0 && i < matrix.length && j >= 0) return j <= matrix[i].length
  return false;
}

const check = (str) => {
  let validWords = (str[0] == "M" && str[3] == "S") || (str[0] == "S" && str[3] == "M")
  if(!validWords) return false;
  if (str[0] == str[1] && str[2] == str[3]) return true;
  if (str[0] == str[2] && str[1] == str[3]) return true;
  return false;
}

matrix.forEach((line, i) => {
  line.forEach((w, j) => {
    if (w == "A" && checkPos(i - 1, j - 1) && checkPos(i - 1, j + 1) && checkPos(i + 1, j - 1) && checkPos(i + 1, j + 1)) {
      if (check(matrix[i - 1][j - 1] + matrix[i - 1][j + 1] + matrix[i + 1][j - 1] + matrix[i + 1][j + 1])) resp++;
    }
  })
})

console.log(resp)

