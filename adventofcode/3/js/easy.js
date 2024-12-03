import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/3.txt', {
  encoding: 'utf-8'
})

console.log(
  input.match(/mul\(\d{1,3},\d{1,3}\)/g)
    .map(x => /(\d{1,3}),(\d{1,3})/g
      .exec(x)
      .slice(1, 3)
      .map(x => +x)
      .reduce((acc, curr) => acc * curr)
    ).reduce((acc, curr) => acc + curr, 0)
)