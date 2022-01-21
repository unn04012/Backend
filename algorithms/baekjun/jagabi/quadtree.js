let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(""))
  )
);

function solution(size, board) {
  let answer = "";
  const possible = (width, x, y) => {
    let first = board[x][y];

    for (let i = x; i < x + width; i++) {
      for (let j = y; j < y + width; j++) {
        if (first != board[i][j]) {
          return false;
        }
      }
    }
    return true;
  };

  const search = (width = size, x = 0, y = 0) => {
    if (possible(width, x, y)) {
      answer += board[x][y];
      return;
    }
    answer += "(";
    search(width / 2, x, y);
    search(width / 2, x, y + width / 2);
    search(width / 2, x + width / 2, y);
    search(width / 2, x + width / 2, y + width / 2);
    answer += ")";
  };
  search();

  return answer;
}
