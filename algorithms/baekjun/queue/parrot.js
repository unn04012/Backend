let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(input[0], input.slice(1, input.length - 1), input[input.length - 1])
);

function solution(count, parrots_sentence, sentence) {
  let answer = "Possible";
  let parrots = [];
  parrots_sentence.forEach((sentence) => {
    parrots.push(sentence.split(" "));
  });
  let leng = 0;
  for (let parrot of parrots) leng += parrot.length;
  if (leng !== sentence.split(" ").length) {
    return "Impossible";
  }
  for (const word of sentence.split(" ")) {
    let flag = false;
    for (let parrot of parrots) {
      if (parrot[0] === word) {
        parrot.shift();
        flag = true;
        break;
      }
    }
    if (!flag) {
      return "Impossible";
    }
  }
  return answer;
}
