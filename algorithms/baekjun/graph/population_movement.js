function solution(info, board) {
  let answer = 0;
  const [n, l, r] = info;
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const borderLine = (x, y, visited) => {
    const queue = [[x, y]];
    const countries = [[x, y]];
    let count = 0,
      sum = 0;
    let flag = false;
    visited[x][y] = true;
    while (queue.length) {
      const [x, y] = queue.shift();
      count += 1;
      sum += board[x][y];
      for (const [x1, y1] of delta) {
        let newX = x + x1;
        let newY = y + y1;
        if (newX < 0 || newX > n - 1 || newY < 0 || newY > n - 1) continue;
        if (visited[newX][newY]) continue;
        if (!populateDiff([x, y], [newX, newY])) continue;
        flag = true;
        visited[newX][newY] = true;
        countries.push([newX, newY]);
        queue.push([newX, newY]);
      }
    }
    return { count, sum, countries, flag };
  };
  const populateDiff = (coord1, coord2) => {
    const [x1, y1] = coord1;
    const [x2, y2] = coord2;
    const diff = Math.abs(board[x2][y2] - board[x1][y1]);
    return diff >= l && diff <= r;
  };
  const move = (val, countries) => {
    for (const [x, y] of countries) board[x][y] = val;
  };
  const totalMove = () => {
    const visited = Array.from(Array(n), () => new Array(n).fill(false));
    let isMove = false;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          const { count, countries, sum, flag } = borderLine(i, j, visited);
          if (flag) isMove = true;
          let population = Math.floor(sum / count);
          move(population, countries);
        }
      }
    }
    return isMove;
  };
  while (true) {
    const isMove = totalMove();
    if (!isMove) break;
    answer += 1;
  }
  return answer;
}

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
