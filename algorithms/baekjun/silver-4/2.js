let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(count, words) {
  let answer = 0;
  const checkSame = (stack, element) => {
    return stack[stack.length - 1] === element;
  };
  for (const word of words) {
    const stack = [word[0]];

    for (let i = 1; i < word.length; i++) {
      const element = word[i];
      const isSame = checkSame(stack, element);

      if (!isSame) {
        stack.push(element);
        continue;
      }

      stack.pop();
    }
    if (stack.length === 0) answer++;
  }
  return answer;
}
