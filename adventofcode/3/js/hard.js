import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/3.txt', {
  encoding: 'utf-8'
})

let valid = ""

let lines = input.split("don't()");
valid += lines.shift()
lines.forEach(x => {
  valid += x.split("do()").slice(1).join("")
})

console.log(
  valid.match(/mul\(\d{1,3},\d{1,3}\)/g)
    .map(x => /(\d{1,3}),(\d{1,3})/g
      .exec(x)
      .slice(1, 3)
      .map(x => +x)
      .reduce((acc, curr) => acc * curr)
    ).reduce((acc, curr) => acc + curr, 0)
)