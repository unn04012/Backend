let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

const testCase = Number(input[0]);
const problems = [];
let index = 1;
for (let j = 0; j < testCase; j++) {
  const closetCount = Number(input[index]);
  const closet = [];
  const iterateCount = index + 1 + closetCount;
  for (let k = index + 1; k < iterateCount; k++) {
    closet.push(input[k]);
  }
  index += closetCount + 1;

  problems.push([closetCount, closet]);
}
console.log(solution(problems));

function solution(problems) {
  const answer = [];
  for (const [closetCount, closets] of problems) {
    const obj = {};

    for (const closet of closets) {
      const [cloth, type] = closet.split(' ');
      if (!obj[type]) {
        obj[type] = [];
      }
      obj[type].push(cloth);
    }
    const arr = Object.values(obj);
    const count = arr.reduce((acc, cur) => acc * (cur.length + 1), 1);

    answer.push(count - 1);
  }

  return answer.join('\n');
}
