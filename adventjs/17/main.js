function detectBombs(grid) {
  let resp = grid.map(x => x.map(y => 0))

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  for (let i = 0; i < resp.length; i++) {
    for (let j = 0; j < resp[0].length; j++) {
      resp[i][j] = directions.reduce((acc, [dy, dx]) => {
        const v = (i + dy) >= 0 &&
          (j + dx) >= 0 &&
          (i + dy) < resp.length &&
          (j + dx) < resp[0].length &&
          grid[i + dy][j + dx]
        return acc + (+v)
      }, 0)
    }
  }

  return resp
}