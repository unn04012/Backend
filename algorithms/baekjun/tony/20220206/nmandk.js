function solution(n, m, k, board) {
  let answer = Number.MIN_SAFE_INTEGER;
  answer = combination(k, board, n, m);

  return answer;
}

// const adjacent = (tempBoard, k) => {
//   // 임시 board로부터 완탐하면서 최대값 찾기
//   let max = Number.MIN_SAFE_INTEGER;
//   let width = tempBoard.length;
//   let height = tempBoard[0].length;
//   const visited = Array.from(Array(width), () => new Array(height).fill(false));
//   const dfs = (depth, sum) => {
//     if (depth === k) {
//       max = Math.max(max, sum);
//       return;
//     }
//     for (let i = 0; i < tempBoard.length; i++) {
//       for (let j = 0; j < tempBoard[i].length; j++) {
//         if (!visited[i][j] && is_adjacent(visited, i, j, width, height)) {
//           visited[i][j] = true;
//           dfs(depth + 1, sum + tempBoard[i][j]);
//           visited[i][j] = false;
//         }
//       }
//     }
//   };
//   dfs(0, 0);
//   return max;
// };

const is_adjacent = (visited, i, j, width, height) => {
  // 인접거리 인지 확인
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [x, y] of delta) {
    let newX = x + i;
    let newY = y + j;
    if (newX < 0 || newX > width - 1 || newY < 0 || newY > height - 1) continue;
    if (visited[newX][newY]) return false;
  }
  return true;
};

const combination = (k, board, n, m) => {
  let max = Number.MIN_SAFE_INTEGER;
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const dfs = (depth, sum, startX, startY) => {
    if (depth === k) {
      max = Math.max(max, sum);
      return;
    }
    for (let i = startX; i < n; i++) {
      let j = i === startX ? startY : 0;
      for (; j < m; j++) {
        if (visited[i][j]) continue;
        if (is_adjacent(visited, i, j, n, m)) {
          visited[i][j] = true;
          dfs(depth + 1, sum + board[i][j], i, j);
          visited[i][j] = false;
        }
      }
    }
  };
  dfs(0, 0, 0, 0);
  return max;
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m, k] = input[0].split(" ").map((e) => Number(e));
console.log(
  solution(
    n,
    m,
    k,
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
