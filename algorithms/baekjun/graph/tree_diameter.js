function solution(n, edges) {
  let answer = { index: 0, max: 0 };
  const tree = Array.from({ length: n + 1 }, () => []);

  for (const [parent, son, weight] of edges) {
    tree[parent].push({ node: son, weight });
    tree[son].push({ node: parent, weight });
  }

  const search = (node1) => {
    const visited = new Array(n + 1).fill(-1);
    const stack = [node1];
    visited[node1] = 0;

    while (stack.length) {
      const node = stack.pop();
      for (const { node: nextNode, weight } of tree[node]) {
        if (visited[nextNode] === -1) {
          visited[nextNode] = visited[node] + weight;
          stack.push(nextNode);
        }
      }
    }
    const max = Math.max(...visited);
    return { index: visited.indexOf(max), max };
  };
  const { index } = search(1);
  answer = search(index);
  return answer.max;
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(" ").map((e) => Number(e)))
  )
);
