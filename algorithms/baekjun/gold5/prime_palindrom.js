let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0].split(" ").map((e) => Number(e))));

function solution(info) {
  let answer = "";
  const [a, b] = info;
  const is_prime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const is_palin = (num) => {
    num = num + "";
    if (num.length === 1) return true;
    if (num === "11") return true;
    if (num.length % 2 === 0) return false;
    let p1 = 0,
      p2 = num.length - 1;
    let flag = true;
    while (p2 >= p1) {
      if (num[p1++] === num[p2--]) {
        continue;
      }
      flag = false;
      break;
    }
    return flag;
  };
  for (let i = a; i <= b; i++) {
    if (i > 10000000) break;
    if (is_palin(i) && is_prime(i)) answer += i + "\n";
  }
  answer += "-1";
  return answer;
}

// let str = "99999999";

// console.log(flag);
