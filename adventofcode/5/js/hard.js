import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/5.txt', {
  encoding: 'utf-8'
})

const [rules, manuals] = input.split(/\s{4}/g)

const obj = {}

rules.split("\r\n").forEach(x => {
  const [a, b] = x.split("|")
  obj[a] ??= {}
  obj[a][b] = -1
  obj[b] ??= {}
  obj[b][a] = 1
})

let resp = 0;

manuals.split("\r\n").forEach(x => {
  const arr = x.split(",")
  let corr = arr.sort((a, b) => obj[a][b])

  if (corr.join(",") != x) {
    resp += +corr[Math.floor(corr.length / 2)]
  }
})

console.log(resp)