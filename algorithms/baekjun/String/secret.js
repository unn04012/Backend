function solution(passwords) {
  let answer = [];

  answer = passwords.map((e, i) => {
    if (i === passwords.length - 1);
    return e.split("").reverse().join("");
  });
  return answer.slice(0, answer.length - 1).join("\n");
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));
