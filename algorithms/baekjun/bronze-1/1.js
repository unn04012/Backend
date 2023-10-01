let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(solution(input[0]));

function solution(str) {
  let answer = 'NO';

  const words = ['pi', 'ka', 'chu'];

  for (const word of words) {
    const regex = new RegExp(word, 'gi');
    str = str.replace(regex, '0');
  }
  return str.split('').filter((e) => e !== '0').length ? 'NO' : 'YES';
}
