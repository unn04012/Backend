function solution(n, profiles) {
  let answer = "";
  const rank = new Array(n).fill(n);
  for (let i = 0; i < n; i++) {
    let w1 = profiles[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      let w2 = profiles[j];
      if (compareBuild(w1, w2)) count++;
    }
    rank[i] = count + 1;
  }
  return rank.join(" ");
}
const compareBuild = (w1, w2) => {
  const [weight1, height1] = w1;
  const [weight2, height2] = w2;
  if (weight2 > weight1 && height2 > height1) return true;
  return false;
};
let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
