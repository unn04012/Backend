function solution(n, board) {
  let answer = [[]];
  while (answer[0].length !== 1) {
    answer = pulling(n, board);
    n /= 2;
    board = answer;
  }
  return answer.flat()[0];
}
const pulling = (firstWidth, board) => {
  let newBoard = [[]];
  let index = 0;
  const dfs = (width, x, y) => {
    if (width === 2) {
      let temp = [];
      for (let i = x; i < x + width; i++) {
        for (let j = y; j < y + width; j++) {
          temp.push(board[i][j]);
        }
      }
      if (!newBoard[x / 2]) newBoard[x / 2] = [];

      newBoard[x / 2][y / 2] = temp.sort((a, b) => b - a)[1];
      return;
    }
    let nextWidth = width / 2;
    dfs(nextWidth, x, y);
    dfs(nextWidth, x, y + nextWidth);
    dfs(nextWidth, x + nextWidth, y);
    dfs(nextWidth, x + nextWidth, y + nextWidth);
  };
  dfs(firstWidth, 0, 0);
  return newBoard;
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
console.log(
  solution(
    n,
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
