import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/7.txt', {
  encoding: 'utf-8'
})

let r = 0;

input.split("\r\n").map(x => {
  const [[total], nums] = x.split(": ").map(x => x.split(" ").map(y => +y))

  let bitArr = 0
  const getBitArr = () => (bitArr).toString(2).padStart(nums.length - 1, 0)

  console.log(total, ":", nums)
  while (bitArr < 2 ** (nums.length - 1)) {
    const bArr = getBitArr()
    let equation = nums.flatMap((x, i) => [x, +bArr[i] ? "*" : "+"])
  
    // console.log(equation)

    let eqTotal = nums.reduce((acc, curr, i) => {
      if(i == 0) return curr
      else {
        if(!!+bArr[i-1]) {
          return acc * curr
        }else {
          return acc + curr
        }
      }
    }, 0)
    if (eqTotal == total) {
      console.log("CHECK")
      r+=total
      break;
    }
    bitArr++;
  }

})

console.log(r)