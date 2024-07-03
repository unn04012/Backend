let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(solution(input[0]));

function solution(names) {
  const dict = {};
  const sortedNames = names.split('').sort();

  for (let i = 0; i < sortedNames.length; i++) {
    const alphabet = sortedNames[i];
    if (!dict[alphabet]) {
      dict[alphabet] = 0;
    }
    dict[alphabet] += 1;
  }

  let isOddAlphbaet = null;
  for (const [key, value] of Object.entries(dict)) {
    if (value % 2 !== 0) {
      if (isOddAlphbaet !== null) return `I'm Sorry Hansoo`;
      isOddAlphbaet = key;
    }
  }

  let arr = [];
  for (const [key, value] of Object.entries(dict)) {
    new Array(Math.floor(value / 2)).fill(key).forEach((e) => arr.push(key));
  }

  return isOddAlphbaet ? arr.join('') + isOddAlphbaet + arr.reverse().join('') : arr.join('') + arr.reverse().join('');
}
