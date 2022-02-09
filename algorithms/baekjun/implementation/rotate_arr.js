function solution(testCase, boards) {
  let answer = [];
  for (const [info, board] of boards) {
    const [n, degree] = info;
    const count = degree < 0 ? (360 + degree) / 45 : degree / 45;
    rotate(n, count, board);

    answer.push(board.map((e) => e.join(" ")));
  }
  return answer.map((e) => e.join("\n")).join("\n");
}
const rotate = (n, count, board) => {
  for (let j = 0; j < count; j++) {
    const mainLine = [],
      subLine = [],
      midCol = [],
      midRow = [];
    let mid = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
      mainLine.push(board[i][i]); // 주대각선
      subLine.push(board[n - 1 - i][i]); // 부대각선
      midCol.push(board[i][mid]); // 가운데 열
      midRow.push(board[mid][i]); // 가운대 행
    }

    for (let i = 0; i < n; i++) {
      board[i][mid] = mainLine[i]; // 주대각선 -> 가운데 열
      board[i][n - 1 - i] = midCol[i]; // 가운데열 -> 부 대각선
      board[mid][i] = subLine[i]; // 부 대각선 -> 가운대 행
      board[i][i] = midRow[i]; // 가운데 행 -> 주 대각선
    }
  }
};

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
const testCase = Number(input[0]);
input = input.map((e) => e.split(" ").map((e) => Number(e)));

let index = 1;
const result = [];
for (let i = 0; i < testCase; i++) {
  const n = input[index];
  result.push([n, input.slice(index + 1, index + n[0] + 1)]);
  index += n[0] + 1;
}

console.log(solution(testCase, result));
