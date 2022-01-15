class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }
  has(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
const info = input[0].split(" ").map((e) => Number(e));
console.log(
  solution(
    info,
    input.slice(1, info[0] + 1),
    input.slice(info[0] + 1, input.length)
  )
);

function solution(size, strs, prefixs) {
  let answer = [];
  const trie = new Trie();
  strs.forEach((str) => trie.insert(str));
  return prefixs.filter((prefix) => trie.has(prefix)).length;
}
