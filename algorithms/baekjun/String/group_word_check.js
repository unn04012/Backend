let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0], input.slice(1, input.length)));

function solution(count, strs) {
  let answer = 0;
  strs.forEach((str) => {
    let record = [];
    for (const c of str) {
      if (record.indexOf(c) === -1) record.push(c);
      else {
        if (record[record.length - 1] !== c) return;
      }
    }
    answer++;
  });
  return answer;
}

function solution2(count, strs) {
  let answer = 0;
  strs.forEach((str) => {
    let stack = [str[0]];
    let prevStr = str[0];
    let set = new Set(str);
    for (const c of str) {
      if (prevStr === c) continue;
      prevStr = c;
      stack.push(c);
    }
    if (stack.join("").length === [...set].length) answer++;
  });
  return answer;
}
