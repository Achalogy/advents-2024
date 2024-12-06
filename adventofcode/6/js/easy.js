import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/6.txt', {
  encoding: 'utf-8'
})

let resp = 0

const map = input.split("\r\n").map(x => x.split(""))

let visited = map.map(x => x.map(y => false))

const startX = map.findIndex(x => x.includes("^"));
const startY = map[startX].indexOf("^");

let dir = 0
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]

let x = startX
let y = startY

const valid = (xi, yi) => {
  if (xi < 0 || map.length <= xi) return false;
  if (yi < 0 || map[0].length <= yi) return false;
  return true;
}

const printTab = () => {
  for(let i = 0; i < map.length; i++) {
    let line = ""
    for(let j = 0; j < map[0].length; j++) {
      if(visited[i][j]) line += "X"
      else line += map[i][j]
    }
    console.log(line)
  }
  console.log(" ")
}

while (valid(x, y)) {
  // printTab()
  if (!visited[x][y]) resp++;
  visited[x][y] = true;

  const aDir = directions[dir]

  if (
    valid(x + aDir[0], y + aDir[1]) &&
    map[x + aDir[0]][y + aDir[1]] == "#"
  ) {
    dir = (dir + 1) % 4
  } else {
    x += aDir[0]
    y += aDir[1]
  }

}

console.log(resp)