let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);

function solution(size, board) {
  let answer = -1;
  const [height, width] = size;
  const visited = Array.from(Array(height), () => new Array(width).fill(false));
  visited[0][0] = true;
  let queue = [{ x: 0, y: 0, dist: 1 }];
  let delta = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  while (queue.length) {
    const { x, y, dist } = queue.shift();

    for (const [key, value] of Object.entries(delta)) {
      let newX = x + value[0];
      let newY = y + value[1];
      if (x === height - 1 && y === width - 1) {
        return dist;
      }
      if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
        continue;
      if (visited[newX][newY]) continue;
      if (board[newX][newY] === "0") continue;
      visited[newX][newY] = true;
      queue.push({ x: newX, y: newY, dist: dist + 1 });
    }
  }
  return answer;
}
