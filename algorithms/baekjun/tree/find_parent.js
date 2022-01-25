function solution(n, edges) {
  const tree = Array.from({ length: n + 1 }, () => []);
  for (const [from, to] of edges) {
    tree[from].push(to);
    tree[to].push(from);
  }
  const stack = [1];
  const visited = new Array(n + 1).fill(false);

  while (stack.length) {
    const node = stack.pop();
    for (const next of tree[node]) {
      if (!visited[next]) {
        visited[next] = node;
        stack.push(next);
      }
    }
  }
  return visited.slice(2, visited.length).join("\n");
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const info = Number(input[0]);

console.log(
  solution(
    info,
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
// const parentsNodeList = new Array(n + 1).fill(false);
const dfs = (root, tree, parentsNodeList) => {
  let nodeList = [root];
  while (nodeList.length > 0) {
    let node = nodeList.pop();
    for (let idx of tree[node]) {
      if (parentsNodeList[idx]) continue;
      parentsNodeList[idx] = node;
      nodeList.push(idx);
    }
  }
};
// dfs(1, tree, parentsNodeList);
// console.log(parentsNodeList);
