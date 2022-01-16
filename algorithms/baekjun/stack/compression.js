let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));
/**
 * 
 K(Q) : Q라는 문자열이 K번 반복
 */
function solution(str) {
  let stack = [0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack[stack.length - 1] -= 1;
      stack.push(Number(str[i - 1]));
      stack.push(0);
      continue;
    }
    if (str[i] === ")") {
      let leng = stack.pop();
      let repeat = stack.pop();
      // let val = stack.pop();
      // console.log(stack);
      stack.push(stack.pop() + leng * repeat);
      continue;
    }
    stack.push(stack.pop() + 1);
  }
  return stack.pop();
}
