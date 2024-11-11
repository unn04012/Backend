function solution(maps) {
  var answer = 0;
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const width = maps[0].length;
  const height = maps.length;

  const queue = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (maps[i][j] === 'S') {
        queue.push({ pos: [i, j], dist: 0 });
      }
    }
  }

  // 어떤 점으로부터 최단거리를 가져올 것인지
  const findDist = (queue, point, position) => {
    const visited = Array.from({ length: height }, () => Array(width).fill(false));
    const [x, y] = position;
    visited[x][y] = position;

    while (queue.length) {
      const { pos, dist } = queue.shift();
      const [x, y] = pos;

      for (const [dx, dy] of delta) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx > height - 1 || ny < 0 || ny > width - 1) continue;
        if (maps[nx][ny] === 'X') continue;

        if (!visited[nx][ny]) {
          if (maps[nx][ny] === point) {
            return { pos: [nx, ny], dist: dist + 1 };
          }
          queue.push({ pos: [nx, ny], dist: dist + 1 });
          visited[nx][ny] = true;
        }
      }
    }
    return { pos: [], dist: -1 };
  };

  const { pos, dist } = findDist(queue, 'L', queue[0].pos);
  if (dist === -1) return -1;

  const nextQueue = pos.length ? [{ pos, dist: 0 }] : [];
  const found = findDist(nextQueue, 'E', pos);
  if (found.dist === -1) return -1;

  return dist + found.dist;
}

console.log(solution(['EXOOO', 'SOOXL']));
