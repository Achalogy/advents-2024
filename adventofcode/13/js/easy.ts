import { readFileSync } from "fs";

const input = readFileSync('adventofcode/inputs/13.txt', {
  encoding: 'utf-8'
})

const data = input.split("\r\n\r\n")

const machines: {
  buttonA: { x: number, y: number },
  buttonB: { x: number, y: number },
  prize: { x: number, y: number },
}[] = []

data.forEach(x => {
  let p: {
    buttonA: { x: number, y: number },
    buttonB: { x: number, y: number },
    prize: { x: number, y: number },
  } = {

  } as any
  const [bA, bB, prize] = x.split("\r\n") as any
  p.buttonA = {
    x: +bA.split(": ").at(-1).split(",").at(0).replace(/[XY]/g, "").trim(),
    y: +bA.split(": ").at(-1).split(",").at(-1).replace(/[XY]/g, "").trim()
  }
  p.buttonB = {
    x: +bB.split(": ").at(-1).split(",").at(0).replace(/[XY]/g, "").trim(),
    y: +bB.split(": ").at(-1).split(",").at(-1).replace(/[XY]/g, "").trim()
  }

  p.prize = {
    x: +prize.replace(", Y", "").split("=").at(1),
    y: +prize.replace(", ", "").split("=").at(2)
  }

  machines.push(p)
})

let resps = machines.map(machine => {
  let posibilities = []
  let a = 0;
  let b = 0;
  while ((machine.buttonA.x * a) <= machine.prize.x && (machine.buttonA.y * a) <= machine.prize.y) {
    a++;
    let leftX = machine.prize.x - (machine.buttonA.x * a);
    let leftY = machine.prize.y - (machine.buttonA.y * a);

    if (leftX % machine.buttonB.x == 0 && leftY % machine.buttonB.y == 0) {
      if (leftX / machine.buttonB.x == leftY / machine.buttonB.y) {
        b = leftX / machine.buttonB.x
      } else continue;
    } else continue;

    posibilities.push([a, b])
  }
  posibilities.sort((a, b) => ((a[0] * 3) + a[1]) - ((b[0] * 3) + b[1]))

  if(posibilities.length == 0) return 0
  return (posibilities[0][0] * 3) + posibilities[0][1]
})

console.log(resps.reduce((acc, curr) => acc + curr, 0))