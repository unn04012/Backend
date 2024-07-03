let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    Number(input[0]),
    input[1].split(' ').map((e) => Number(e)),
    Number(input[2]),
    input[3].split(' ').map((e) => Number(e))
  )
);

function solution(N, cards, M, numbers) {
  const set = new Set();

  for (const card of cards) set.add(card);

  return numbers.map((e) => Number(set.has(e))).join(' ');
}
