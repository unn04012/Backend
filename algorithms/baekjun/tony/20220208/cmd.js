function solution(n, fileNames) {
  let answer = "";
  const firstFile = fileNames[0];
  for (let i = 0; i < firstFile.length; i++) {
    const char = firstFile[i];
    let flag = true;
    for (let j = 1; j < n; j++) {
      if (char !== fileNames[j][i]) {
        flag = false;
        break;
      }
    }
    answer += flag === true ? char : "?";
  }
  return answer;
}

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

let start = new Date().getTime();
console.log(solution(Number(input[0]), input.slice(1, input.length)));
let last = new Date().getTime();
console.log(last - start);
