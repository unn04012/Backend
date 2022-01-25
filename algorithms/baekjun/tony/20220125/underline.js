function solution(info, words) {
  let answer = [];
  //n : 단어 개수, m : 단어 길이
  const [n, m] = info;
  let newWord = words.join("_");
  console.log(newWord.length, m);
  if (newWord.length !== m) {
    const copyWords = words
      .slice()
      .sort()
      .map((e) => {
        return { origin: e, count: 0 };
      });
    const needCount = m - newWord.length;
    for (let i = 0, j = 0; i < needCount; i++, j++) {
      if (j >= copyWords.length - 1) j = 0;
      let element = copyWords[j];
      if (words.indexOf(element.origin) === words.length - 1) {
        i -= 1;
        copyWords[++j].count += 1;
        continue;
      }
      element.count += 1;
    }
    console.log(copyWords);
    for (const word of words) {
      let index = copyWords.findIndex((element) => element.origin === word);
      answer.push(copyWords[index].origin + "_".repeat(copyWords[index].count));
    }
  }
  return answer.join("");
}

let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

const info = input[0].split(" ").map((e) => Number(e));
console.log(solution(info, input.slice(1, input.length)));
let arr = [
  "Alpha_Beta_Gamma__Delta__Epsilon",
  "Alpha__Beta__Gamma_Delta_Epsilon",
];

console.log(arr.sort());
