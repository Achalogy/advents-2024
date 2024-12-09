function moveTrain(board, mov) {

  const moves = {
    "L": [0, -1],
    "R": [0, 1],
    "U": [-1, 0],
    "D": [1, 0]
  }

  const y = board.findIndex(x => x.includes("@"))
  const x = board[y].indexOf("@")

  let r = !(+(!(y + 1) + !(x + 1) + !(y < board.length) + !(x < board[0].length))) - 1

  const move = moves[mov]
  let c = board?.at(y + move[0])?.at(x + move[1])

  r -= c == "o";
  r += c == "*";

  const resps = {
    "-1": "crash",
    "-2": "crash",
    "0": "none",
    "1": "eat"
  }

  return resps[r.toString()];
}