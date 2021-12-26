let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e))
  )
);

function solution(count, nums) {
  let answer = -1 + " ";
  let stack = [nums[count - 1]];
  for (let i = count - 2; i >= 0; i--) {
    while (stack.length) {
      if (nums[i] < stack[stack.length - 1]) {
        answer = stack[stack.length - 1] + " " + answer;
        // 현재 수가 스택보다 클 때
        break;
      }
      stack.pop();
    }
    if (!stack.length) answer = -1 + " " + answer;
    stack.push(nums[i]);
  }
  return answer;
}
