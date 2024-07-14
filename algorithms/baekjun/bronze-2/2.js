let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(solution(input[0], input[1]));

function solution(problems, keyword) {
  const deletedNumber = problems
    .split('')
    .filter((e) => isNaN(Number(e)))
    .join('');

  return deletedNumber.includes(keyword) ? 1 : 0;
}
