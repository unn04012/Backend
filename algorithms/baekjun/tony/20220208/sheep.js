function solution(size, board) {
  const [height, width] = size;
  let sheepTotal = 0,
    wolfTotal = 0;
  const visited = Array.from(Array(height), () => new Array(width).fill(false));
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!visited[i][j] && board[i][j] !== "#") {
        const { sheep, wolf } = move([i, j], size, board, visited);
        sheepTotal += sheep;
        wolfTotal += wolf;
      }
    }
  }
  return sheepTotal + " " + wolfTotal;
}
/**
 * 이동가능 : .
 * 울타리 : #
 * 양 : o
 * 늑대 : v
 */
const move = (start, size, board, visited) => {
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const [height, width] = size;

  let sheep = 0,
    wolf = 0;
  const queue = [start];
  visited[start[0]][start[1]] = true;
  while (queue.length) {
    const [x, y] = queue.shift();
    if (board[x][y] === "o") sheep++;
    if (board[x][y] === "v") wolf++;
    for (const [x1, y1] of delta) {
      let newX = x + x1;
      let newY = y + y1;
      if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
        continue;
      if (visited[newX][newY]) continue;
      if (board[newX][newY] === "#") continue;
      visited[newX][newY] = true;
      queue.push([newX, newY]);
    }
  }
  sheep > wolf ? (wolf = 0) : (sheep = 0);
  return { sheep, wolf };
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

let start = new Date().getTime();
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);
let last = new Date().getTime();
console.log(last - start);
