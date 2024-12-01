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

const timesAppear = {}

rightList.forEach(x => {
  if(timesAppear[x]) {
    timesAppear[x]++;
  }else timesAppear[x] = 1
})

let r = 0;

for (let i = 0; i < leftList.length; i++) {
  r += leftList[i] * (timesAppear[leftList[i]] ?? 0);
}
console.log(r)