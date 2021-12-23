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

function solution(size, heights) {
  let answer = 0;
  if (heights.filter((e) => e !== 0).length <= 1) return 0;
  heights.forEach((height, index) => {
    if (index === 0) return;
    let leftMax = Math.max(0, ...heights.slice(0, index));
    let rightMax = Math.max(0, ...heights.slice(index, heights.length));
    answer += Math.max(0, Math.min(leftMax, rightMax) - height);
  });
  return answer;
}

function solution1(size, heights) {
  let answer = 0;
  let [width, height] = size;
  let heightInterval = [];
  if (heights.filter((e) => e !== 0).length <= 1) return 0;
  for (let i = 0; i < heights.length; i++) {
    let height1 = heights[i];
    let nextHeight = 0;
    let nextIndex;
    let flag = false;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= height1) {
        heightInterval.push([j, height1]);
        i = j - 1;
        flag = true;
        break;
      }
      if (heights[j] > nextHeight) {
        nextHeight = heights[j];
        nextIndex = j;
        i = j - 1;
      }
      nextHeight = Math.max(nextHeight, heights[j]);
    }
    if (nextHeight !== 0 && !flag) heightInterval.push([nextIndex, nextHeight]);
  }

  heightInterval.forEach(([index, height]) => {
    for (let i = index - 1; i >= 0; i--) {
      if (heights[i] >= height) break;
      answer += height - heights[i];
    }
  });
  return answer;
}
