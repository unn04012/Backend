let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(Number(input[0])));

function solution(num) {
  return num % 2 === 0 ? 'CY' : 'SK';
}
