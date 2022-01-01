let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");

const combination = (arr, count) => {
  const result = [];
  const temp = [];
  const dfs = (depth, start, count, arr) => {
    if (depth === count) {
      result.push(temp.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      temp[depth] = arr[i];
      dfs(depth + 1, i + 1, count, arr);
    }
  };
  dfs(0, 0, count, arr);
  return result;
};

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input
      .slice(1, input.length)
      .map((e) => e.split(" ").map((e1) => Number(e1)))
  )
);

function solution(size, board) {
  let answer = Number.MIN_SAFE_INTEGER;
  let result;
  let index2;
  const [height, width] = size;
  const zeroLocate = [];
  const virusLocate = [];
  let delta = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] === 0) zeroLocate.push([i, j]);
      if (board[i][j] === 2) virusLocate.push([i, j]);
    }
  }
  let indexes = combination(zeroLocate, 3);
  //   indexes = [
  //     [
  //       [0, 1],
  //       [1, 0],
  //       [1, 2],
  //     ],
  //   ];
  for (const index of indexes) {
    let boardTemp = board.map((e) => e.slice());
    let zeroCount = 0;
    for (let i = 0; i < 3; i++) {
      const [x, y] = index[i];
      boardTemp[x][y] = 1;
    }
    const visited = Array.from(Array(height), () =>
      new Array(width).fill(false)
    );
    let distance = 0;
    for (let i = 0; i < virusLocate.length; i++) {
      let [x, y] = virusLocate[i];
      let queue = [{ x, y, dist: distance }];
      visited[x][y] = true;
      while (queue.length) {
        let { x, y, dist } = queue.shift();
        boardTemp[x][y] = 2;
        for (const [key, value] of Object.entries(delta)) {
          let newX = x + value[0];
          let newY = y + value[1];
          if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
            continue;
          if (visited[newX][newY]) continue;
          if (boardTemp[newX][newY] === 1) continue;
          visited[newX][newY] = true;
          distance++;
          queue.push({ x: newX, y: newY, dist: dist + 1 });
        }
      }
      //   console.log(answer);
    }
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (boardTemp[i][j] === 0) zeroCount++;
      }
    }
    answer = Math.max(answer, zeroCount);
  }

  return answer;
}
