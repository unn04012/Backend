let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input.slice(1, input.length).map((e) =>
      e
        .trim()
        .split(" ")
        .map((e) => Number(e))
    )
  )
);

function getChickenDist(L1, L2) {
  // L1 : 집, L2 : 치킨집
  const [x2, y2] = L2;
  const [x1, y1] = L1;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function chickenCombination(chickens, count) {
  let result = [];
  let temp = [];
  const dfs = (depth, start) => {
    if (depth === count) {
      result.push(temp.slice());
      return;
    }
    for (let i = start; i < chickens.length; i++) {
      temp[depth] = chickens[i];
      dfs(depth + 1, i + 1);
    }
  };
  dfs(0, 0);
  return result;
}
//치킨집의 조합으로 선택 후 치킨 거리의 합 최솟값 구하기
function solution(info, board) {
  let answer = Number.MAX_SAFE_INTEGER;
  const [size, chickenCount] = info;
  const chLocation = [];
  const hoLocation = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === 2) chLocation.push([i, j]);
      else if (board[i][j] === 1) hoLocation.push([i, j]);
    }
  }
  const combiChicken = chickenCombination(chLocation, chickenCount);

  for (const chLocation of combiChicken) {
    // [ [ 1, 2 ], [ 2, 2 ], [ 4, 4 ] ]
    let totalChickenDist = 0;
    for (const hoLocate of hoLocation) {
      // 집들의 위치
      let chickenDist = Number.MAX_SAFE_INTEGER;
      for (const chLocate of chLocation) {
        //[1, 2], [2, 2], [4, 4];
        chickenDist = Math.min(chickenDist, getChickenDist(hoLocate, chLocate));
      }
      totalChickenDist += chickenDist;
    }
    answer = Math.min(answer, totalChickenDist);
  }
  return answer;
}
