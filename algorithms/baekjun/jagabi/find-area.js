let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);

function solution(info, squares) {
  let answer = [];
  const [height, width, count] = info;
  const board = Array.from(Array(height), () => new Array(width).fill(1));
  console.log(board);
  const visited = Array.from(Array(height), () => new Array(width).fill(false));
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const drawSquare = (location) => {
    // (0,2), (4,4) => (2,0) (4,4)
    let [x1, y1, x2, y2] = location;
    let newX1 = height - y1,
      newY1 = x1,
      newX2 = height - y2,
      newY2 = x2;
    for (let i = newX2; i < newX1; i++) {
      for (let j = newY1; j < newY2; j++) {
        board[i][j] = 0;
      }
    }
  };
  const move = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    let count = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [x1, y1] of delta) {
        const newX = x + x1;
        const newY = y + y1;
        if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
          continue;
        if (visited[newX][newY]) continue;
        if (board[newX][newY] === 0) continue;
        visited[newX][newY] = true;
        count++;
        queue.push([newX, newY]);
      }
    }
    return count;
  };
  for (const location of squares) {
    drawSquare(location);
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        answer.push(move(i, j));
      }
    }
  }
  answer.sort((a, b) => a - b);

  return answer.length + "\n" + answer.join(" ");
}
