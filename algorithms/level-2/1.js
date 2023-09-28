function solution(wants, numbers, discounts) {
  var answer = 0;
  const obj = {};
  for (let i = 0; i < wants.length; i++) {
    const want = wants[i];
    const number = numbers[i];
    obj[want] = number;
  }

  for (let i = 0; i < discounts.length; i++) {
    const copyObj = JSON.parse(JSON.stringify(obj));
    let flag = false;
    for (let j = i; j < i + 10; j++) {
      const want = discounts[j];
      if (!want) break;
      if (copyObj[want]) {
        copyObj[want] -= 1;
        if (copyObj[want] < 0) break;
        const total = Object.values(copyObj).reduce((acc, cur) => acc + cur, 0);
        if (total === 0) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      answer++;
    }
  }
  return answer;
}

const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
const number = [3, 2, 2, 2, 1];
const discount = ['apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana', 'chicken', 'apple'];

const result = solution(want, number, discount);
console.log(result);
