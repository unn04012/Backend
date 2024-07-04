let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    input.slice(1, input.length).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

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

function solution([N, M], boards) {
  const answer = [];
  const getChickenDistance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

  const chickenLocations = [];
  const cityLocations = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (boards[i][j] === 2) chickenLocations.push([i, j]);
      if (boards[i][j] === 1) cityLocations.push([i, j]);
    }
  }

  const combiChicken = chickenCombination(chickenLocations, M);

  for (const chLocation of combiChicken) {
    let allDistances = 0;
    for (const [x1, y1] of cityLocations) {
      const distances = [];
      for (const [x2, y2] of chLocation) {
        const distance = getChickenDistance(x1, y1, x2, y2);
        distances.push(distance);
      }
      const minDistance = Math.min(...distances); // 하나의 집에 대한 최소 거리

      allDistances += minDistance;
    }
    answer.push(allDistances);
    chickenLocations.pop();
  }

  return Math.min(...answer);
}
