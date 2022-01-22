let input = require("fs")
  .readFileSync("../problem.txt")
  .toString()
  .trim()
  .split("\n");
// var util = require("util");
console.log(solution(input.slice(0, input.length - 1)));

function solution(passwords) {
  let answer = [];

  const vowel = ["a", "e", "i", "o", "u"];
  const hasVowel = (password) => {
    for (const c of password) if (vowel.includes(c)) return true;
    return false;
  };
  const twoConsecutive = (password) => {
    for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === password[i + 1]) {
        return password[i] === "e" || password[i] === "o";
      }
    }
    return true;
  };
  const vowelConsecutive = (password) => {
    for (let i = 0; i < password.length - 2; i++) {
      let count = 0;
      for (let j = i; j < i + 3; j++) {
        if (vowel.includes(password[j])) count++;
      }
      if (count === 0 || count === 3) return false;
    }
    return true;
  };
  for (let password of passwords) {
    const origin = password;
    password = password.toLowerCase();
    if (
      !hasVowel(password) ||
      !twoConsecutive(password) ||
      !vowelConsecutive(password)
    ) {
      answer.push({ origin, valid: false });
      continue;
    }
    answer.push({ origin, valid: true });
  }

  return answer
    .map((e) =>
      e.valid
        ? `<${e.origin}> is acceptable.`
        : `<${e.origin}> is not acceptable.`
    )
    .join("\n");
}
