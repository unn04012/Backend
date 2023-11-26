let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

const testCase = Number(input[0]);
const arrs = [];
for (let i = 1; i < testCase * 4; i += 4) {
  arrs.push([Number(input[i]), input[i + 1].split(' ').map((e) => Number(e)), Number(input[i + 2]), input[i + 3].split(' ').map((e) => Number(e))]);
}

console.log(solution(arrs));

function solution(arrs) {
  const answer = [];
  const binarySearch = (arr, target, left, right) => {
    let mid = 0;
    while (left <= right) {
      mid = Math.floor((right + left) / 2);

      if (arr[mid] === target) return mid;

      if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  };
  for (const [note1Count, note1, note2Count, note2] of arrs) {
    note1.sort((a, b) => a - b);
    for (const num of note2) {
      const result = binarySearch(note1, num, 0, note2.length - 1);
      result === -1 ? answer.push(0) : answer.push(1);
    }
  }

  return answer.join('\n');
}
