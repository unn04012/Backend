let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0], input.slice(1, input.length)));

function solution(count, fret) {
  let answer = 0;
  const guiterArr = [];
  fret.forEach((info) => {
    let [guiterNum, fretNum] = info.split(" ");
    guiterNum = Number(guiterNum);
    fretNum = Number(fretNum);
    if (!guiterArr[guiterNum]) guiterArr[guiterNum] = [];
    const guiter = guiterArr[guiterNum]; // []
    while (guiter[guiter.length - 1] > fretNum) {
      guiter.pop();
      answer++;
    }
    if (guiter[guiter.length - 1] !== fretNum) {
      guiterArr[guiterNum].push(fretNum);
      answer++;
    }
  });

  return answer;
}
