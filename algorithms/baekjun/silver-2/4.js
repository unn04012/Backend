let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

const N = Number(input[0]);

console.log(
  solution(
    N,
    input.slice(1).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, selectNumber - 1);

    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results; // 결과 담긴 results return
}

function solution(N, ingredients) {
  let answer = Number.MAX_SAFE_INTEGER;

  const arr = Array.from({ length: N }, (_, i) => i);

  const sours = ingredients.map((e) => e[0]);
  const bitters = ingredients.map((e) => e[1]);

  for (let i = 1; i <= N; i++) {
    const combinations = getCombinations(arr, i);
    for (const combination of combinations) {
      const sour = combination.reduce((acc, cur) => acc * sours[cur], 1);
      const bitter = combination.reduce((acc, cur) => acc + bitters[cur], 0);

      answer = Math.min(answer, Math.abs(sour - bitter));
    }
  }

  return answer;
}
