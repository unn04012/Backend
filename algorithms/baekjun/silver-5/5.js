let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(' ').map((e) => Number(e)))
  )
);

function solution(T, bridges) {
  const answer = [];
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }

  for (const [selectNumber, total] of bridges) {
    const count = nCr(total, selectNumber);

    answer.push(Math.round(count));
  }

  return answer.join('\n');
}
