let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(num, strs) {
  const answer = [];
  const rulesetAlphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (const str of strs) {
    const aIndex = str.indexOf('A');
    const fIndex = str.indexOf('F');
    const cIndex = str.indexOf('C');
    if (aIndex === -1 || fIndex === -1 || cIndex === -1) {
      answer.push('Good');
      continue;
    }
    if (aIndex >= 1) {
      const subStr = str.substring(0, aIndex);
      let count = 0;
      let flag = false;
      for (const e of subStr) {
        if (rulesetAlphabets.includes(e)) {
          count++;
          if (count > 1) {
            flag = true;
            break;
          }
        }
      }
      if (flag) {
        answer.push('Good');
        continue;
      }
    }
    if (aIndex > fIndex || cIndex < fIndex) {
      answer.push('Good');
      continue;
    }
    if (cIndex < str.length - 1) {
      const subStr = str.substring(cIndex + 1, str.length);
      let count = 0;
      let flag = false;
      for (const e of subStr) {
        const result = rulesetAlphabets.includes(e);
        if (result) {
          count++;
          if (count > 1) {
            flag = true;
            break;
          }
        } else {
          flag = true;
          break;
        }
      }
      if (flag) {
        answer.push('Good');
        continue;
      }
    }
    answer.push('Infected!');
  }

  return answer.join('\n');
}
