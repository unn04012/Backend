const is_palindrom = (string) => {
  let start = 0,
    end = string.length - 1;
  while (start < end) {
    if (string[start++] !== string[end--]) return false;
  }
  return true;
};

function solution(strs) {
  let answer = [];
  let count = {};
  let oddChar = [];
  let newStr = "";
  for (const c of strs) {
    if (!count[c]) count[c] = 0;
    count[c]++;
  }
  for (let [key, value] of Object.entries(count).sort()) {
    if (value % 2 === 1) {
      oddChar.push(key);
      value -= 1;
    }
    if (oddChar.length >= 2) return "I'm Sorry Hansoo";
    if (value !== 0 && value % 2 === 0)
      newStr += key.repeat(Math.floor(value / 2));
  }
  let reverse = newStr.split("").reverse().join("");
  oddChar.length !== 1
    ? (answer = newStr + reverse)
    : (answer = newStr + oddChar[0] + reverse);
  return answer;
}
let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0]));
