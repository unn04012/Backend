let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split('').map((e) => Number(e)))
  )
);

function solution(size, boards) {
  let answer = -1;

  const [height, width] = size;

  const visited = Array.from(Array(height), () => new Array(width).fill(false));

  const delta = [
    [-1, 0], // left
    [1, 0], // right
    [0, 1], // up
    [0, -1], // down
  ];

  const queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === height - 1 && y === width - 1) {
      return dist;
    }

    for (const [x1, y1] of delta) {
      const newX = x + x1;
      const newY = y + y1;

      if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1) continue;
      if (boards[newX][newY] === 0) continue;
      if (visited[newX][newY]) continue;

      visited[newX][newY] = true;
      queue.push([newX, newY, dist + 1]);
    }
  }

  return answer;
}
