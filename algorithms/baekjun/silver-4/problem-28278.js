let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

const N = Number(input[0]);

console.log(
  solution(
    N,
    input.slice(1).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(N, commands) {
  const stack = [];
  let answer = '';
  const command = {
    1: (value) => stack.push(value),
    2: () => (stack.length ? stack.pop() : -1),
    3: () => stack.length,
    4: () => (stack.length === 0 ? 1 : 0),
    5: () => (stack.length === 0 ? -1 : stack[stack.length - 1]),
  };

  for (let i = 0; i < N; i++) {
    const [commandNum, value] = commands[i];
    const foundCommand = command[commandNum];
    if (commandNum === 1) {
      foundCommand(value);
      continue;
    } else answer += foundCommand();

    answer += i === N - 1 ? '' : '\n';
  }

  return answer;
}
