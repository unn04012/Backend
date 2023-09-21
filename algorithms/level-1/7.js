function solution(s) {
  var answer = 0;
  const sToArr = s.split('').reverse();
  const removeDuplicatedArr = [...new Set(sToArr)];
  if (removeDuplicatedArr.length === 1) return 1;
  while (sToArr.length) {
    const x = sToArr.pop();
    let differentXCount = 0;
    let sameXCount = 1;

    if (sToArr.length === 0) {
      answer++;
      break;
    }

    for (let i = sToArr.length - 1; i >= 0; i--) {
      const element = sToArr[i];
      x === element ? sameXCount++ : differentXCount++;
      if (sameXCount === differentXCount) {
        answer++;
        break;
      }
    }
    const totalCount = differentXCount + sameXCount;

    for (let i = 0; i < totalCount - 1; i++) {
      sToArr.pop();
    }

    if (sameXCount !== differentXCount && sToArr.length === 0) answer++;
  }
  return answer;
}

const s = 'abaab';
const result = solution(s);
console.log(result);
