let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(num, words) {
  let answer = 0;

  for (const word of words) {
    const stack = [word[0]];
    for (let i = 1; i < word.length; i++) {
      const c = word[i];
      if (stack[stack.length - 1] === c) {
        stack.pop();
        continue;
      }
      stack.push(c);
    }

    if (stack.length === 0) answer++;
  }

  return answer;
}
