function solution(s) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (!obj[e]) {
      obj[e] = [i];
      answer.push(-1);
    } else {
      answer.push(i - obj[e][obj[e].length - 1]);
      obj[e].push(i);
    }
  }
  return answer;
}

const s = 'aaabbb';
const result = solution(s);

console.log(result);
