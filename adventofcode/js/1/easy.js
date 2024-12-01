import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/1.txt', {
  encoding: 'utf-8'
})

let leftList = []
let rightList = []

input.split("\n").map(x => {
  const [l, r] = x.replace(/\s+/g, " ").trim().split(" ").map(x => +x.trim())

  leftList.push(l)
  rightList.push(r)
})

leftList = leftList.sort()
rightList = rightList.sort()

let r = 0;

for(let i = 0; i < leftList.length; i++) {
  r += Math.abs(leftList[i] - rightList[i])
}
console.log(r)