let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input[0]));

function solution(words) {
  let answer = "";
  let strange_words = [];
  // let tags = words.match(/<[a-z|\s]+>/g);
  let word = [];
  for (let i = 0; i < words.length; i++) {
    let c = words[i];
    if (c === "<") {
      while (word.length) answer += word.pop();
      while (words[i] !== ">") {
        answer += words[i];
        i++;
      }
      answer += words[i];
      continue;
    }
    // 태그가 아ㄹ 때
    if (c === " ") {
      while (word.length) answer += word.pop();
      answer += " ";
      continue;
    }
    word.push(words[i]);
  }
  if (word.length) {
    while (word.length) answer += word.pop();
  }
  return answer;
}
