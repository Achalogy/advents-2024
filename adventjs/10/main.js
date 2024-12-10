/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let reg = {}

  for (let a = 0; a < instructions.length; a++) {
    const i = instructions[a]
    const [instruction, dirA, dirB] = i.split(" ")

    switch (instruction) {
      case "MOV":
        if (isNaN(dirA)) {
          reg[dirA] ??= 0
          reg[dirB] = reg[dirA]
        } else reg[dirB] = +dirA
        break;
      case "INC":
        reg[dirA] ??= 0
        reg[dirA]++
        break;
      case "DEC":
        reg[dirA] ??= 0
        reg[dirA]--
        break;
      case "JMP":
        reg[dirA] ??= 0
        if (reg[dirA] == 0) {
          a = +dirB - 1;
        }
        break;
    }
  }
  return reg["A"]
}