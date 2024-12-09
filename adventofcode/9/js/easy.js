import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/9.txt', {
  encoding: 'utf-8'
})

let diskmap = []

let a = 0;
for (let i = 0; i < input.length; i += 2) {
  diskmap.push(...Array(+input[i]).fill(a.toString()))
  diskmap.push(...(".".repeat(+input[i + 1])))
  a++;
}

console.log(diskmap)
while (diskmap.includes(".")) {
  const e = diskmap.pop()
  if (e != ".") {
    diskmap[diskmap.findIndex(x => x == ".")] = e
  }
}
console.log(diskmap.join(""))

console.log(
  diskmap.reduce((acc, curr, i) => {
    const v = (+curr) * i
    return acc + v
  }, 0)
)
