// let input = require("fs")
//   .readFileSync("../problem.txt")
//   .toString()
//   .trim()
//   .split("\n");
// // var util = require("util");
console.log(solution());

function solution() {
  let answer = "";
  const d = (num) => {
    let sum = 0;
    let originNum = num;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return originNum + sum;
  };
  let nums = [];
  for (let i = 1; i <= 10000; i++) {
    nums.push(d(i));
  }
  nums = [...new Set(nums)].sort((a, b) => a - b);
  for (let i = 1, j = 0; i <= 10000; i++) {
    if (i === nums[j]) {
      j++;
      continue;
    }
    answer += i + "\n";
  }

  return answer.slice(0, answer.length - 1);
}
