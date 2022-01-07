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

function solution(size, board) {
  let answer = [];
  const [height, width] = size;

  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let cheezeCount = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 1) cheezeCount++;
    }
  }

  const moveOuter = () => {
    let outer = [];
    const visited = Array.from(Array(height), () =>
      new Array(width).fill(false)
    );
    const queue = [[0, 0]];
    visited[0][0] = true;
    while (queue.length) {
      const [x, y] = queue.pop();
      outer.push([x, y]);
      board[x][y] = 2;
      for (const [x1, y1] of delta) {
        const newX = x + x1;
        const newY = y + y1;
        if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
          continue;
        if (visited[newX][newY]) continue;
        if (board[newX][newY] === 1) continue;
        visited[newX][newY] = true;
        queue.push([newX, newY]);
      }
    }
    return outer;
  };
  const meltCheeze = (outer) => {
    let count = 0;
    while (outer.length) {
      const [x, y] = outer.pop();
      for (const [x1, y1] of delta) {
        const newX = x + x1;
        const newY = y + y1;
        if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
          continue;
        if (board[newX][newY] === 1) {
          board[newX][newY] = 2;
          count++;
        }
      }
    }
    return count;
  };
  // const count = meltCheeze(outer);
  let time = 0;
  while (cheezeCount > 0) {
    const outer = moveOuter();
    const count = meltCheeze(outer);
    cheezeCount -= count;
    time++;
    if (cheezeCount === 0) {
      answer = [time, count];
    }
  }

  return answer.join("\n");
}
