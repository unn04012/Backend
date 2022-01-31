function solution(size, board) {
  const [width, height, N] = size;
  const bombBoard = [];
  if (N === 1) return board.join("\n"); // 1초일 때 초기값
  if (N % 2 === 0) return new Array(width).fill("O".repeat(height)).join("\n"); // 짝수 일때 바로 반환
  board = board.map((e) => e.split(""));

  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let i = 0; i < 2; i++) {
    const visited = Array.from(Array(width), () =>
      new Array(height).fill(false)
    );
    const { bombs, location } = findBomb(board);
    board = installBomb(location, board); // 폭탄 설치
    board = deleteBomb(bombs, board, delta, visited);
    bombBoard.push(board.map((e) => e.join("")).join("\n"));
  }
  let time = N % 4 === 3 ? 0 : 1;
  return bombBoard[time];
}

const installBomb = (location, board) => {
  location.forEach(([x, y]) => {
    board[x][y] = "O";
  });
  return board;
};
const deleteBomb = (bombs, board, delta, visited) => {
  bombs.forEach(([x, y]) => {
    board[x][y] = ".";
    visited[x][y] = true;
    for (const [x1, y1] of delta) {
      const newX = x + x1;
      const newY = y + y1;
      if (
        newX < 0 ||
        newX > board.length - 1 ||
        newY < 0 ||
        newY > board[0].length - 1
      )
        continue;
      if (visited[newX][newY]) continue;
      visited[newX][newY] = true;
      board[newX][newY] = ".";
    }
  });
  return board;
};
const findBomb = (board) => {
  const bombs = [];
  const location = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") bombs.push([i, j]);
      else if (board[i][j] === ".") location.push([i, j]);
    }
  }
  return { bombs, location };
};

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length)
  )
);
