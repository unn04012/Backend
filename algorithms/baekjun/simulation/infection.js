let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input
      .slice(1, input.length - 1)
      .map((e) => e.split(" ").map((e) => Number(e))),
    input[input.length - 1].split(" ").map((e) => Number(e))
  )
);

function solution(info, board, result) {
  let answer = 0;
  const [size, count] = info;
  const [time, x, y] = result;
  const visited = Array.from(Array(size), () => new Array(size).fill(false));
  let delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const findVirus = () => {
    let virusPoint = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] && !visited[i][j]) {
          virusPoint.push([i, j, board[i][j]]);
        }
      }
    }
    return virusPoint;
  };
  const infection = (x, y, virusNum) => {
    visited[x][y] = true;
    for (const [x1, y1] of delta) {
      const newX = x + x1;
      const newY = y + y1;
      if (newX < 0 || newX > size - 1 || newY < 0 || newY > size - 1) continue;
      if (visited[newX][newY]) continue;
      if (board[newX][newY] !== 0) continue;
      board[newX][newY] = virusNum;
    }
  };

  for (let seconds = 0; seconds < time; seconds++) {
    const virusPoint = findVirus();
    virusPoint.sort((a, b) => a[2] - b[2]);
    for (const [x, y, virusNum] of virusPoint) {
      infection(x, y, virusNum);
    }
  }
  return board[x - 1][y - 1];
}

// let arr = [[0, 1, 2]];
// const test = (x, y) => {
//   arr[x][y] = 20;
// };
// console.log(arr);
// test(0, 0);
// console.log(arr);
