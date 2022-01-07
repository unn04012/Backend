let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(Number(input[0]), input[1]));

function solution(difference, people) {
  let womanCount = 0;
  let manCount = 0;
  let stack = [];
  people = people.split("");
  for (let i = 0; i < people.length; i++) {
    const sex = people[i];
    if (stack[stack.length - 1] === i) {
      stack.pop();
      continue;
    }
    sex === "M" ? manCount++ : womanCount++;
    console.log(womanCount, manCount, i);
    if (Math.abs(womanCount - manCount) > difference) {
      if (i === people.length - 1) {
        sex === "M" ? manCount-- : womanCount--;
        break;
      }
      people[i + 1] === "M" ? manCount++ : womanCount++;
      if (Math.abs(womanCount - manCount) <= difference) {
        stack.push(i + 1);
        sex === "M" ? manCount-- : womanCount--;
        i -= 1;
        continue;
      } else {
        people[i + 1] === "M" ? manCount-- : womanCount--;
        sex === "M" ? manCount-- : womanCount--;
        break;
      }
    }
  }
  return womanCount + manCount;
}
