let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");

console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(size, board) {
  let answer = [];
  const visited = Array.from(Array(size), () => new Array(size).fill(false));
  let delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const move = (x, y) => {
    let queue = [{ x, y }];
    let dist = 0;
    visited[x][y] = true;
    while (queue.length) {
      let { x, y } = queue.shift();
      dist++;
      for (const [x1, y1] of delta) {
        let newX = x + x1;
        let newY = y + y1;
        if (newX < 0 || newX > size - 1 || newY < 0 || newY > size - 1)
          continue;
        if (board[newX][newY] === "0") continue;
        if (visited[newX][newY]) continue;
        visited[newX][newY] = true;
        queue.push({ x: newX, y: newY });
      }
    }
    return dist;
  };
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (board[x][y] === "1" && !visited[x][y]) {
        answer.push(move(x, y));
      }
    }
  }
  answer.sort((a, b) => a - b);
  answer = answer.length + "\n" + answer.join("\n");
  if (answer[answer.length - 1] === "\n")
    return answer.slice(0, answer.length - 1);
  return answer;
}
