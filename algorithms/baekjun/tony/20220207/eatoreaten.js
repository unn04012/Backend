function solution(n, test) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let [count, aNums, bNums] = test[i];
    bNums.sort((a, b) => a - b);

    let total = 0;
    for (const num of aNums) total += binarySearch(num, bNums);
    answer.push(total);
  }
  return answer.join("\n");
}

const binarySearch = (num, numbers) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (num > numbers[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");
const testCase = Number(input[0]);
const test = [];
let j = 1;
for (let i = 0; i < testCase; i++) {
  let temp = input[j].split(" ").map((e) => Number(e));
  let aTemp = input[j + 1].split(" ").map((e) => Number(e));
  let bTemp = input[j + 2].split(" ").map((e) => Number(e));
  j += 3;
  test.push([temp, aTemp, bTemp]);
}
console.log(solution(testCase, test));
