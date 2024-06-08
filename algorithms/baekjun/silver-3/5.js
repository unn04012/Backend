let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

const num = input[0];
console.log(solution(Number(num)));

function solution(num) {
  if (num === 1) return 0;
  const countByNum = {
    1: 1,
    2: 1,
    3: 1,
  };

  if (num <= 3) return countByNum[num];

  for (let i = 4; i <= num; i++) {
    let minCounts = [];
    if (i % 3 === 0) {
      const prevCount = countByNum[i / 3];
      minCounts.push(prevCount + 1);
    }

    if (i % 2 === 0) {
      const prevCount = countByNum[i / 2];
      minCounts.push(prevCount + 1);
    }

    const prevCount = countByNum[i - 1];
    minCounts.push(prevCount + 1);

    const minCount = Math.min(...minCounts);

    countByNum[i] = minCount;
  }
  return countByNum[num];
}
