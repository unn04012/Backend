let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input[1].split(" ").map((e) => Number(e)),
    input
      .slice(2, input.length)
      .map((e) => e.split(" ").map((e1) => Number(e1)))
  )
);
// 빈 칸 : 0
// 벽 : 1
function solution(size, location, place) {
  let answer = 1;
  const [height, width] = size;
  const delta = [
    [-1, 0], //up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
  ];
  const directOrder = [
    [3, 2, 1, 0],
    [0, 3, 2, 1],
    [1, 0, 3, 2],
    [2, 1, 0, 3],
  ];

  const search = (x, y, direct) => {
    for (const order of directOrder[direct]) {
      let newX = x + delta[order][0];
      let newY = y + delta[order][1];
      if (newX < 0 || newX > height - 1 || newY < 0 || newY > width - 1)
        continue;
      if (place[newX][newY] === 0) {
        return { message: true, coordinate: [newX, newY, order] };
      }
    }
    // 후진 좌표
    let newX = x + delta[directOrder[direct][1]][0];
    let newY = y + delta[directOrder[direct][1]][1];
    if (
      newX < 0 ||
      newX > height - 1 ||
      newY < 0 ||
      newY > width - 1 ||
      place[newX][newY] === 1
    ) {
      return { message: false };
    }
    return { message: false, coordinate: [newX, newY, direct] };
  };
  let [x, y, direct] = location;
  place[x][y] = 2;
  while (true) {
    let result = search(x, y, direct);
    // 2번
    if (result.message) {
      [x, y, direct] = result.coordinate;
      answer++;
      place[x][y] = 2;
      continue;
    }
    if (result.coordinate) {
      [x, y, direct] = result.coordinate;
      continue;
    }
    break;
  }
  return answer;
}
