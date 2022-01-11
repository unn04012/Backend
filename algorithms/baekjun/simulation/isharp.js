let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));

function solution(declaration) {
  let answer = [];
  let firstSpaceIndex = declaration.indexOf(" ");
  const types = new Set(["*", "[", "&"]);
  const type = declaration.slice(0, firstSpaceIndex);
  let variables = declaration
    .slice(firstSpaceIndex, declaration.length - 1)
    .split(",");
  answer = variables.map((variable) => {
    let str = "";
    let typo = "";
    for (let i = 0; i < variable.length; i++) {
      if (types.has(variable[i])) {
        if (variable[i] === "[") {
          typo = "[]" + typo;
          i += 1;
          continue;
        }
        typo = variable[i] + typo;
        continue;
      }
      str += variable[i];
    }
    return type + typo + str + ";";
  });
  return answer.join("\n");
}
