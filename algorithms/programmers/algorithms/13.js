function solution(board) {
  let answer = -1;
  const width = board[0].length;
  const height = board.length;

  const delta = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  const visited = Array.from({ length: height }, () => Array(width).fill(false));

  const queue = [];

  // 현재위치가 유효한 범위인지 검사하낟.
  const checkValidPos = (x, y, dx, dy) => {
    const newX = x + dx;
    const newY = y + dy;

    if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1) return false;
    if (board[newX][newY] === 'D') return false;
    return true;
  };

  // initialize queue
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        queue.push({ pos: [i, j], dist: 0 });
      }
    }
  }

  while (queue.length) {
    const {
      pos: [x, y],
      dist,
    } = queue.shift();

    if (board[x][y] === 'G') {
      answer = dist;
      break;
    }

    for (const [x1, y1] of Object.values(delta)) {
      let nx = x;
      let ny = y;

      while (checkValidPos(nx, ny, x1, y1)) {
        nx += x1;
        ny += y1;
      }

      if (!visited[nx][ny]) {
        queue.push({ pos: [nx, ny], dist: dist + 1 });
        visited[nx][ny] = true;
      }
    }

    // 이동
  }

  return answer;
}
console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']));
