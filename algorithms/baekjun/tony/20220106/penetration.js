function solution(size, board) {
  let answer = "NO";
  const [height, width] = size;
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited = Array.from(Array(height), () => new Array(width).fill(false));
  const queue = findOuter(board);
  queue.forEach(([x, y]) => (visited[x][y] = true));
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === height - 1) return "YES";
    for (const [x1, y1] of delta) {
      const newX = x + x1;
      const newY = y + y1;
      if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
        continue;
      if (visited[newX][newY]) continue;
      if (board[newX][newY] === "1") continue;
      visited[newX][newY] = true;
      queue.push([newX, newY]);
    }
  }
  return answer;
}
const findOuter = (board) => {
  const queue = [];
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === "0") queue.push([0, i]);
  }
  return queue;
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);
