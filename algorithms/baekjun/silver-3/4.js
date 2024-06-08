let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

const [start, end] = input[0].split(' ');
console.log(solution(Number(start), Number(end)));

function solution(start, end) {
  if (end === 2) return 2;
  const isPrimeArr = Array.from({ length: end + 1 }).fill(true);
  isPrimeArr[0] = false;
  isPrimeArr[1] = false;

  for (let i = 2; i <= Math.sqrt(end); i++) {
    if (isPrimeArr[i] === true) {
      for (let j = i + i; j <= end; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }

  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrimeArr[i] === true) primes.push(i);
  }

  return primes.join('\n');
}
