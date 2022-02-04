class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(parent, value) {
    if (parent === -1) {
      this.root = new Node(value);
      return;
    }
    let { curNode } = this._findNode(parent);
    curNode.children.push(new Node(value));
  }
  remove(node) {
    if (this.root.value === node) {
      this.root = null;
      return;
    }
    let { prevNode, index } = this._findNode(node);
    prevNode.children.splice(index, 1);
  }
  leafCount() {
    let count = 0;
    if (!this.root) return 0;
    const dfs = (curNode) => {
      if (curNode.children.length === 0) count += 1;
      if (curNode.children.length) {
        for (let i = 0; i < curNode.children.length; i++) {
          dfs(curNode.children[i]);
        }
      }
    };
    dfs(this.root);
    return count;
  }
  _findNode(node) {
    let curNode = this.root;
    let prevNode = this.root;
    let index = 0;
    if (curNode.value === node) return { curNode };
    const dfs = (prevCur, cur) => {
      // node === value
      if (cur.value === node) {
        index = prevCur.children.findIndex(({ value }) => value === node);
        curNode = cur;
        prevNode = prevCur;
        return;
      }
      for (let i = 0; i < cur.children.length; i++) {
        dfs(cur, cur.children[i]);
      }
    };
    dfs(null, curNode);

    return { curNode, index, prevNode };
  }
}
function solution(n, numbers, deleteNum) {
  let answer = [];
  const treeVal = {};
  const tree = new Tree();
  for (let i = 0; i < numbers.length; i++) {
    if (!treeVal[numbers[i]]) treeVal[numbers[i]] = [];
    treeVal[numbers[i]].push(i);
  }
  const recur = (parent, node) => {
    tree.insert(parent, node);
    if (treeVal[node]) {
      for (const element of treeVal[node]) {
        // element : 값
        recur(node, element);
      }
    }
  };
  recur(-1, treeVal[-1][0]);
  tree.remove(deleteNum);
  return tree.leafCount();
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
    Number(input[2])
  )
);
