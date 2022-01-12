let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(count, commands) {
  let answer = [];
  const delta = {
    // 동서남북
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const turnDirection = {
    L: { up: "left", down: "right", left: "down", right: "up" },
    R: { up: "right", down: "left", left: "up", right: "down" },
  };
  const move = {
    F: (x, y, direct) => {
      x = x + delta[direct][0];
      y = y + delta[direct][1];
      return [x, y];
    },
    B: (x, y, direct) => {
      x = x - delta[direct][0];
      y = y - delta[direct][1];
      return [x, y];
    },
  };

  for (const command of commands) {
    let start = { coordinate: [0, 0], direct: "up" }; // 바라보는 방향 up에서 1칸 전진
    let minX = 0,
      minY = 0,
      maxX = 0,
      maxY = 0;

    for (let op of command) {
      if (op === "L" || op === "R") {
        start.direct = turnDirection[op][start.direct];
        continue;
      }
      let [x, y] = start.coordinate;
      start.coordinate = move[op](x, y, start.direct);
      minX = Math.min(minX, start.coordinate[0]);
      maxX = Math.max(maxX, start.coordinate[0]);
      minY = Math.min(minY, start.coordinate[1]);
      maxY = Math.max(maxY, start.coordinate[1]);
    }
    answer.push((maxX - minX) * (maxY - minY));
  }
  return answer.join("\n");
}
