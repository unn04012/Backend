let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input[0]);
console.log(solution(count, input[1], input.slice(2, input.length)));

function solution(count, pattern, files) {
  const index = pattern.indexOf("*");
  pattern =
    pattern.slice(0, index) + "." + pattern.slice(index, pattern.length);
  const regex = new RegExp(pattern, "g");
  return files
    .map((file) => {
      const result = file.match(regex);
      return result && result[0].length === file.length ? "DA" : "NE";
    })
    .join("\n");
}
