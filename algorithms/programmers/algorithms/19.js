function solution(maps) {
  const answer = [];
  const width = maps[0].length;
  const height = maps.length;
  const visited = Array.from({ length: height }, () => Array(width).fill(false));
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const exploreIsland = ([i, j]) => {
    const queue = [[i, j]];
    visited[i][j] = true;
    let days = 0;

    while (queue.length) {
      const [x, y] = queue.shift();

      days += Number(maps[x][y]);

      for (const [dx, dy] of delta) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1) continue;
        if (maps[newX][newY] === 'X') continue;

        if (!visited[newX][newY]) {
          visited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    }

    return days;
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // 참여를 안했으면
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        answer.push(exploreIsland([i, j]));
      }
    }
  }

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution(['XXX', 'XXX', 'XXX']));
