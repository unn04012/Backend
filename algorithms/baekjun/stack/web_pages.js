let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input.slice(0, input.length)));

function solution(htmls) {
  let answer = [];
  const validTags = (html) => {
    let stack = [];
    let tags = {};
    for (let i = 0; i < html.length; i++) {
      let c = html[i];
      if (c === "<") {
        let j = i + 1;
        let tagName = "";
        while (html[j] !== " " && html[j] !== ">" && j < html.length) {
          tagName += html[j];
          j++;
        }
        i = j;
        if (!tagName.includes("/")) {
          if (tagName.includes("br")) continue;
          tags["/" + tagName] = tagName;
          stack.push(tagName);
        } else {
          if (
            stack[stack.length - 1] === tags[tagName] &&
            stack[stack.length - 1] !== undefined
          )
            stack.pop();
          else return false;
        }
        continue;
      }
    }
    return stack.length ? false : true;
  };
  for (const html of htmls) {
    if (html === "#") break;
    validTags(html) ? answer.push("legal") : answer.push("illegal");
  }

  return answer.join("\n");
}
