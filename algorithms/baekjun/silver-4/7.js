let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((e) => Number(e));
console.log(solution(input.slice(1, N + 1), input.slice(N + 1, input.length)));

function solution(noEars, noEyes) {
  const answer = [];

  const hashes = new Map();

  noEars.forEach((noEar) => hashes.set(noEar, 1));

  for (const noEye of noEyes) {
    const hasValue = hashes.get(noEye);
    if (hasValue) hashes.set(noEye, hasValue + 1);
    else hashes.set(noEye, 1);
  }

  hashes.forEach((value, key) => {
    if (value > 1) answer.push(key);
  });

  return `${answer.length}\n` + answer.sort().join('\n');
}
