let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(
  solution(
    input[0].split(" ").map((e) => Number(e)),
    input[1].split(" ")
  )
);

function solution(info, chars) {
  let answer = "";
  const [count, kinds] = info;
  const combination = (arr, number) => {
    let result = [];
    let temp = [];
    const dfs = (depth, start) => {
      if (depth === number) {
        result.push(temp.join(""));
        return;
      }

      for (let i = start; i < arr.length; i++) {
        temp[depth] = arr[i];
        dfs(depth + 1, i + 1);
      }
    };
    dfs(0, 0);
    return result;
  };
  chars.sort();
  const vowel = ["a", "e", "i", "o", "u"];
  let charVowels = [];
  const charConsonants = [];
  for (const char of chars) {
    if (vowel.includes(char)) {
      charVowels.push(char);
      continue;
    }
    charConsonants.push(char);
  }
  //   console.log(combination(charConsonants, 3));
  let passwords = new Set();
  let vowelCount = 1;
  let consonantCount = count - vowelCount; // 3
  while (consonantCount >= 2) {
    let vowels = combination(charVowels, vowelCount);
    let consonants = combination(charConsonants, consonantCount);
    for (let i = 0; i < vowels.length; i++) {
      for (let j = 0; j < consonants.length; j++) {
        let password = vowels[i] + consonants[j];
        passwords.add(password.split("").sort().join(""));
      }
    }
    vowelCount++;
    consonantCount--;
  }
  answer = [...passwords].sort().join("\n");
  return answer;
}
