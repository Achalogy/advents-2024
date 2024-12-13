/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let x = 0;
  let y = 0;

  let movesArr = moves.split("")

  const dirs = {
    "U": [1, 0],
    "R": [0, 1],
    "D": [-1, 0],
    "L": [0, -1]
  }
  const inverse = {
    "U": "D",
    "D": "U",
    "R": "L",
    "L": "R"
  }

  let moved = {}

  for (let i = 0; i < moves.length; i++) {
    let m = movesArr[i]
    let move = dirs[m]
    if (m == "*") move = dirs[movesArr[i + 1]]
    else if (m == "?") {
      m = movesArr[i + 1]
      if (moved[m]) {
        move = [0, 0]
        m = "-"
      }
      else {
        move = dirs[m]
      }
      i++
    }
    else if (m == "!") {
      move = dirs[inverse[movesArr[i + 1]]]
      m = inverse[movesArr[i + 1]]
      i++
    }

    moved[m] ??= true

    y += move[0]
    x += move[1]
  }

  return (x == 0 && y == 0) || [x, y]
}