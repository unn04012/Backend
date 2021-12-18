let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

var a = parseInt(input[0]);

console.log(solution(a, input.slice(1, input.length)));

function solution(n, nums) {
  let answer = 0;
  let stack = [];
  //   console.log(nums);
  nums.forEach((num) => {
    num = Number(num);
    if (num === 0) {
      stack.pop();
      return;
    }
    stack.push(num);
  });
  stack.forEach((num) => (answer += num));
  return answer;
}
