import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/11.txt', {
  encoding: 'utf-8'
})

let stones = input.split(" ")

/**
 * @param {number} stone - Stone to evaluate
**/
const evaluateStone = (stone) => {
  if (stone == 0) return [1];
  const len = stone.toString().length
  const pow = 10 ** Math.floor(len / 2);
  if (len % 2 == 0) return [Math.floor(stone / pow), stone % pow]
  return [stone * 2024]
}

let visited = {}

const eval75Times = (stone, c = 1) => {
  let r = evaluateStone(stone)
  let count = 0;

  try {
    if (visited[stone][c]) {
      return visited[stone][c]
    }
  } catch { }

  if (c == 75) {
    return r.length
  }

  for (let i of r) {
    count += eval75Times(i, c + 1)
  }
  visited[stone] ??= {}
  visited[stone][c] = count

  return count
}

console.log(
  stones.reduce((acc, curr) => acc + eval75Times(curr), 0)
)