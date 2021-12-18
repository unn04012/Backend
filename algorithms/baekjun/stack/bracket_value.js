let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0]));

function solution(strs) {
  let answer = 0;
  const pair = {
    ")": "(",
    "]": "[",
  };
  const is_bracket = (str) => {
    let stack = [];
    for (let c of str) {
      if (pair[c]) {
        if (stack.length === 0) return false;
        let result = stack.pop();
        if (pair[c] !== result) return false;
        continue;
      }
      stack.push(c);
    }
    return stack.length ? false : true;
  };
  if (!is_bracket(strs)) return 0;

  let stack = [];
  for (let c of strs) {
    if (pair[c]) {
      // 닫는 괄호 들어왔을 때
      if (stack.length === 0) return 0;
      let result = stack.pop();
      let num = 1;
      if (Number.isInteger(result * 1)) {
        // 숫자일 경우
        num = result;
        while (true) {
          //숫자일때까지
          let val = stack.pop();
          result = val;
          if (!Number.isInteger(val * 1)) break;
          num += val;
        }
      }
      if (pair[c] !== result) return false;
      result = result === "(" ? 2 : 3;
      stack.push(result * num);
      continue;
    }
    stack.push(c);
  }
  stack.forEach((e) => (answer += e));
  return answer;
}
//console.log(Number.isInteger("37" * 1));
// console.log(Number.isNaN("(" * 1));
