function solution(n, info, m, relations) {
  const [num1, num2] = info;
  const birth = Array.from({ length: n + 1 }, () => []);
  const visited = new Array(n + 1).fill(-1);
  for (const [parent, son] of relations) {
    birth[parent].push(son);
    birth[son].push(parent);
  }
  const dfs = (num1, num2) => {
    let stack = [num1];
    visited[num1] = 0;
    while (stack.length) {
      let parent = stack.pop();
      for (const son of birth[parent]) {
        if (visited[son] === -1) {
          visited[son] = visited[parent] + 1;
          //   if (son === num2) break;
          stack.push(son);
        }
      }
    }
  };
  dfs(num1, num2);
  return visited[num2];
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e)),
    Number(input[2]),
    input.slice(3, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
