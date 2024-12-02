import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/2.txt', {
  encoding: 'utf-8'
})

const reports = input.split("\n").map(x => x.split(" ").map(y => +y))

let safeCount = 0;

const checkSafe = (r) => {
  let unsafe = false;
  const increase = r.at(0) < r.at(1)

  for (let i = 0; i < r.length - 1; i++) {
    let diff = Math.abs(r.at(i) - r.at(i + 1));

    if (increase && r.at(i) > r.at(i + 1)) {
      unsafe = true;
      break;
    } else if (!increase && r.at(i) < r.at(i + 1)) {
      unsafe = true;
      break;
    } else if (diff < 1 || diff > 3) {
      unsafe = true;
      break;
    }
  }
  return !unsafe
}

reports.forEach(r => {
  const cases = [r]
  r.forEach((_, i) => cases.push(r.filter((_, j) => i != j)))

  if(cases.some(r => checkSafe(r))) safeCount++;
})

console.log(safeCount)