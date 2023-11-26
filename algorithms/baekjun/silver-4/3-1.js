let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

const testCase = Number(input[0]);
const arrs = [];
for (let i = 1; i < testCase * 4; i += 4) {
  arrs.push([Number(input[i]), input[i + 1].split(' ').map((e) => Number(e)), Number(input[i + 2]), input[i + 3].split(' ').map((e) => Number(e))]);
}

console.log(solution(arrs));

function solution(arrs) {
  const answer = [];
  for (const [note1Count, note1, note2Count, note2] of arrs) {
    const set = new Set();
    for (const num of note1) {
      set.add(num);
    }

    for (const num of note2) {
      set.has(num) ? answer.push(1) : answer.push(0);
    }
  }

  return answer.join('\n');
}
