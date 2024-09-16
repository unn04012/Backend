let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(
  solution(
    Number(input[0]),
    input.slice(1).map((e) => Number(e))
  )
);

function solution(ropeNum, ropes) {
  ropes.sort((a, b) => a - b);
  let maxWeight = ropeNum * ropes[0];
  let nextRopeCount = ropeNum - 1;

  for (let i = 1; i < ropes.length; i++) {
    const mw = nextRopeCount * ropes[i];

    if (mw > maxWeight) maxWeight = mw;

    nextRopeCount--;
  }

  return maxWeight;
}
