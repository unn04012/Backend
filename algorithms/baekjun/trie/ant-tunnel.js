class Node {
  constructor(depth = 0) {
    this.depth = depth;
    this.children = new Map();
  }
}
class Tunnel {
  constructor() {
    this.root = new Node();
  }

  insert(feeds) {
    let currentNode = this.root;
    for (const feed of feeds) {
      if (!currentNode.children.has(feed)) {
        currentNode.children.set(feed, new Node(currentNode.depth + 1));
      }
      currentNode = currentNode.children.get(feed);
    }
  }
  makeDepth = (num) => {
    return "--".repeat(num);
  };
  search() {
    const structure = [];
    const dfs = (depth, feed) => {
      for (const [key, value] of [...feed.children].sort()) {
        structure.push(this.makeDepth(depth) + key);
        dfs(feed.depth + 1, value);
      }
    };
    dfs(0, this.root);
    return structure;
  }
}

let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    Number(input[0]),
    input.slice(1, input.length).map((e) => e.split(" "))
  )
);

function solution(count, info) {
  let answer = [];
  const tunnel = new Tunnel();

  info.forEach((feedInfo) => {
    const feeds = feedInfo.slice(1, feedInfo.length);
    tunnel.insert(feeds);
  });
  answer = tunnel.search();
  return answer.join("\n");
}

function solution2(count, info) {
  let answer = [];
  const tunnel = { depth: 0 };
  const insert = (feeds) => {
    let currentTunnel = tunnel;
    for (const feed of feeds) {
      if (!currentTunnel[feed]) {
        currentTunnel[feed] = {};
        currentTunnel[feed].depth = currentTunnel.depth + 1;
        // continue;
      }
      currentTunnel = currentTunnel[feed];
    }
  };
  info.forEach((feedInfo) => {
    const feeds = feedInfo.slice(1, feedInfo.length);
    insert(feeds);
  });
  const structure = [];
  const makeDepth = (num) => {
    return new Array(num).fill("--").join("");
  };
  const search = (depth, tunnel) => {
    console.log(tunnel);
    for (const [key, value] of Object.entries(tunnel).sort()) {
      if (key === "depth") continue;
      structure.push(makeDepth(depth) + key);
      search(tunnel.depth + 1, value);
    }
  };
  search(0, tunnel);

  return structure.join("\n");
}
