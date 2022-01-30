function solution(str) {
  let answer = [];
  let stack = [];
  let newStack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      const { start } = stack.pop();
      newStack.push({ start, end: i });
      continue;
    }
    if (str[i] === "(") {
      stack.push({ start: i, end: 0 });
    }
  }
  const deleteNum = [];
  for (let i = 0; i < newStack.length; i++) {
    deleteNum.push(combintaion(newStack.length, i + 1));
  }

  for (const num of deleteNum.flat()) {
    let newStr = str.split(""); //[0], [1], [0,1]
    for (let i = 0; i < num.length; i++) {
      const { start, end } = newStack[num[i]];
      newStr[start] = "";
      newStr[end] = "";
    }
    answer.push(newStr.join(""));
  }
  return [...new Set(answer)].sort().join("\n");
}

const combintaion = (total, count) => {
  const result = [];
  const temp = [];
  const dfs = (depth, start) => {
    if (depth === count) {
      result.push(temp.slice());
      return;
    }
    for (let i = start; i < total; i++) {
      temp[depth] = i;
      dfs(depth + 1, i + 1);
    }
  };
  dfs(0, 0);
  return result;
};
// console.log(combintaion(3, 1));
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));
