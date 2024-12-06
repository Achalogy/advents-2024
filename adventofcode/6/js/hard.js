import { readFileSync } from "fs";
import { start } from "repl";

const input = readFileSync('adventofcode/inputs/6.txt', {
  encoding: 'utf-8'
})

let resp = 0

const originalMap = input.split("\r\n").map(x => x.split(""))
const startX = originalMap.findIndex(x => x.includes("^"));
const startY = originalMap[startX].indexOf("^");

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
]
const validPos = (xi, yi) => {
  if (xi < 0 || originalMap.length <= xi) return false;
  if (yi < 0 || originalMap[0].length <= yi) return false;
  return true;
}

const printTab = (map) => {
  for (let i = 0; i < map.length; i++) {
    let line = ""
    for (let j = 0; j < map[0].length; j++) {
      // if (visited[i][j]) line += "X"
      line += map[i][j]
    }
    console.log(line)
  }
  console.log(" ")
}

const evaluateMap = (map) => {
  let visited = map.map(x => x.map(y => false))
  let loopDetector = map.map(x => x.map(y => [false, false, false, false]))

  let dir = 0;

  let x = startX
  let y = startY

  let loop = false;
  while (validPos(x, y)) {
    // printTab()
    if (loopDetector[x][y][dir] == true) {
      loop = true;
      break;
    };
    visited[x][y] = true;
    loopDetector[x][y][dir] = true;

    const aDir = directions[dir]

    if (
      validPos(x + aDir[0], y + aDir[1]) &&
      map[x + aDir[0]][y + aDir[1]] == "#"
    ) {
      dir = (dir + 1) % 4
    } else {
      x += aDir[0]
      y += aDir[1]
    }

  }

  return loop
}

for (let i = 0; i < originalMap.length; i++) {
  for (let j = 0; j < originalMap[0].length; j++) {
    if (originalMap[i][j] == '.') {
      let newMap = originalMap.map((x) => x.map(y => y))
      newMap[i][j] = "#"
      resp += +evaluateMap(newMap)
    }
  }
}
console.log(resp)