let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    Number(input[1]),
    input.slice(2).map((e) => Number(e))
  )
);

function solution(info, count, positions) {
  let answer = 0;

  const [screenWidth, bucketWidth] = info;
  let start = 1;
  let end = bucketWidth;

  for (const applePosition of positions) {
    if (start > applePosition) {
      answer += start - applePosition;
      end -= start - applePosition;

      start = applePosition;
    } else if (end < applePosition) {
      answer += applePosition - end;
      start += applePosition - end;

      end = applePosition;
    }
  }

  return answer;
}
