let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(solution(input.map((e) => Number(e))));

function solution(ages) {
  const ageSum = ages.reduce((acc, cur) => acc + cur, 0);
  const excludeDwarfIndexes = [];

  for (let i = 0; i < ages.length; i++) {
    let is100 = false;
    for (let j = i + 1; j < ages.length; j++) {
      const twoAgeSum = ages[i] + ages[j];
      if (ageSum - twoAgeSum === 100) {
        excludeDwarfIndexes.push(i, j);
        is100 = true;
        break;
      }
    }
    if (is100) break;
  }
  const realDwarfs = ages.filter((_, i) => !excludeDwarfIndexes.includes(i));

  return realDwarfs.sort((a, b) => a - b).join('\n');
}
