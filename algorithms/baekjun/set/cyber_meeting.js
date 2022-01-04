let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
console.log(solution(input[0].split(" "), input.slice(1, input.length)));

function solution(time, records) {
  const [start, end, endStreaming] = time;
  let enterMembers = new Set();
  let exitMembers = new Set();
  for (const record of records) {
    const [time, nickname] = record.split(" ");
    if (time <= start) {
      enterMembers.add(nickname);
      continue;
    }
    if (time >= end && time <= endStreaming) {
      if (enterMembers.has(nickname)) exitMembers.add(nickname);
    }
  }
  return exitMembers.size;
}
