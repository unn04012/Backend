let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(size, boards) {
  const answer = [];

  const maxHeight = Math.max(...boards.flat());
  const direction = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1], // up
  ];

  for (let k = 0; k < maxHeight; k++) {
    const waterfall = k + 1;
    const visited = Array.from(Array(size), () => new Array(size).fill(false));

    const bfs = (x, y, waterfall) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [x, y] = queue.shift();

        for (const [x1, y1] of direction) {
          const newX = x + x1;
          const newY = y + y1;
          if (newX < 0 || newX >= size || newY < 0 || newY >= size) continue;
          if (boards[newX][newY] > waterfall) continue; // 높이
          if (visited[newX][newY]) continue;

          visited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    };
    const findSafeZone = (x, y) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [x, y] = queue.shift();
        visited[x][y] = true;

        for (const [x1, y1] of direction) {
          const newX = x + x1;
          const newY = y + y1;
          if (newX < 0 || newX >= size || newY < 0 || newY >= size) continue;
          if (visited[newX][newY] === true) continue;

          visited[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    };
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (visited[i][j] === false) {
          bfs(i, j, waterfall);
        }
      }
    }
    let safeZone = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (visited[i][j] === false) {
          findSafeZone(i, j);
          safeZone++;
        }
      }
    }
    answer.push(safeZone);
    answer.push(1);
  }

  return Math.max(...answer);
}
