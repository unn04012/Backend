function solution(land) {
  var answer = 0;
  const n = land.length; // 세로
  const m = land[0].length; // 가로

  const delta = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const oils = Array(m).fill(0);

  const foundArea = ([x, y], visited) => {
    const queue = [{ pos: [x, y], area: 1 }];
    visited[x][y] = true;
    let size = 0;
    const set = new Set();

    while (queue.length) {
      const {
        pos: [x, y],
        area,
      } = queue.shift();

      size++;
      set.add(y);

      for (const [dx, dy] of delta) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx > n - 1 || ny < 0 || ny > m - 1) continue;
        if (land[nx][ny] === 0) continue;

        if (!visited[nx][ny]) {
          queue.push({ pos: [nx, ny], area: area + 1 });
          visited[nx][ny] = true;
        }
      }
    }

    for (const column of set) {
      oils[column] += size;
    }
  };

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (!visited[j][i] && land[j][i] === 1) {
        foundArea([j, i], visited);
      }
    }
    answer = Math.max(answer, sum);
  }

  return Math.max(...oils);
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
