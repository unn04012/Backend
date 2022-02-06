function solution(info) {
  let answer = 0;
  const [a, b, c, n] = info;
  const aShare = Math.floor(n / a);
  const bShare = Math.floor(n / b);
  const cShare = Math.floor(n / c);
  let flag = false;
  for (let i = 0; i <= aShare; i++) {
    let aSum = i * a;
    if (flag) break;
    for (let j = 0; j <= bShare; j++) {
      let bSum = j * b;
      if (flag) break;
      for (let k = 0; k <= cShare; k++) {
        let cSum = aSum + bSum + k * c;
        if (cSum > n) break;
        if (flag) break;
        if (cSum === n) {
          answer = 1;
          flag = true;
          break;
        }
      }
    }
  }
  return answer;
}

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(input[0].split(" ").map((e) => Number(e))));
