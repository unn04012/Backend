let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));

function solution(chFomula) {
  let answer = 0;
  let stack = [0];
  const mass = {
    H: 1,
    C: 12,
    O: 16,
  };
  let lastElement = "";
  for (let i = 0; i < chFomula.length; i++) {
    let element = chFomula[i];
    if (element === "(") {
      stack.push(0);
      continue;
    }
    if (element === ")") {
      // 괄호 다음에 숫자 있을 때
      if (Number(chFomula[i + 1])) {
        stack.push(stack.pop() * Number(chFomula[i + 1]));
        i += 1;
      }
      let value = stack.pop();
      stack[stack.length - 1] += value;
      continue;
    }
    if (mass[element]) {
      stack.push(stack.pop() + mass[element]);
      lastElement = element;
      continue;
    }
    stack.push(stack.pop() + (Number(element) - 1) * mass[lastElement]);
  }

  return stack.pop();
}
