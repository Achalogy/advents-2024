import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/9.txt', {
  encoding: 'utf-8'
})

let diskmap = []

let a = 0;
for (let i = 0; i < input.length; i += 2) {
  diskmap.push(Array(+input[i]).fill(a.toString()))
  const dots = +input[i + 1]
  diskmap.push(Array(isNaN(dots) ? 0 : dots).fill("."))
  a++;
}

console.log(diskmap.flat().join(""))
// let old = diskmap.flat().join("")
for (let i = diskmap.length - 1; i >= 0; i--) {
  const v = diskmap[i]

  if (!isNaN(v.at(0)) && v.at(0)) {
    const validI = diskmap.slice(0, i).findIndex(x =>
      x[0] == "." && x.length >= v.length
    )

    if (validI > 0) {
      // console.log(validI)

      let oldL = diskmap[validI].length

      diskmap[validI] = v
      diskmap[i] = Array(v.length).fill(".")
      diskmap.splice(validI + 1, 0, Array(oldL - v.length > 0 ? oldL - v.length : 0).fill("."))

      // console.log(diskmap)
    }
  }

  // if (diskmap.flat().join("") != old) console.log(diskmap.flat().join(""))
  // old = diskmap.flat().join("")
}
console.log(diskmap.flat().join(""))

console.log(diskmap.flat().reduce((acc, curr, i) => {
  if (isNaN(curr)) return acc
  const v = (+curr) * i
  return acc + v
}, 0))