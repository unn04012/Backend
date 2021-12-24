let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");

console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input[1].split(" ").map((e) => Number(e))
  )
);

function solution(info, trees) {
  let answer = "";
  trees.sort((a, b) => a - b);
  const [count, height] = info;
  let left = 0;
  let right = trees[trees.length - 1];
  let mid = Math.floor((left + right) / 2); // 절단기 높이

  while (left <= right) {
    const sum = trees.reduce((acc, item) => {
      if (item > mid) acc += item - mid;
      return acc;
    }, 0);

    if (sum < height) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    // console.log(sum, mid, left, right);
    mid = Math.floor((left + right) / 2);
  }

  return right;
}

let arr = [10, 20, 30];
let item = 5;
console.log(
  arr.reduce((acc, e) => {
    if (item > e) {
      acc += 35 - e;
    }
    return acc;
  }, 0)
);
