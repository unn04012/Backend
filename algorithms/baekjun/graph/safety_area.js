let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) =>
      e
        .trim()
        .split(" ")
        .map((e) => Number(e))
    )
  )
);

function solution(size, board) {
  let answer = 0;
  let maxHeight = Math.max(...board.flat());
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const soakRain = (height, board) => {
    board = board.map((e) => e.slice());
    let area = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        board[i][j] <= height ? (board[i][j] = 0) : area.push([i, j]);
      }
    }
    return { area, soakPlace: board };
  };

  const findSafety = (area, board) => {
    const visited = Array.from(Array(size), () => new Array(size).fill(false));
    let count = 0;
    for (const [i, j] of area) {
      if (!visited[i][j]) {
        count++;
        queue = [[i, j]];
        visited[i][j] = true;
        while (queue.length) {
          let [x, y] = queue.shift();
          for (const [x1, y1] of delta) {
            let newX = x + x1;
            let newY = y + y1;
            if (newX < 0 || newX > size - 1 || newY < 0 || newY > size - 1)
              continue;
            if (visited[newX][newY]) continue;
            if (board[newX][newY] !== 0) {
              visited[newX][newY] = true;
              queue.push([newX, newY]);
            }
          }
        }
      }
    }
    return count;
  };
  for (let i = 0; i < maxHeight; i++) {
    const { area, soakPlace } = soakRain(i, board);
    answer = Math.max(answer, findSafety(area, soakPlace));
  }
  return answer;
}
