let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    input[1].split(' ').map((e) => Number(e))
  )
);

function solution([N, M], numbers) {
  let answer = 0;

  // 길이만큼 원소를 가진 배열을 반환한다.
  const makeArrByLeng = (leng) => {
    const arr = Array.from({ length: leng }).map((_, i) => i + 1);
    return arr;
  };

  const findElementTh = (direction, element, arr) => {
    let count = 0;
    let i = 0;
    if (arr[0] === element) return { arr, count };

    const copiedArr = arr.slice();

    if (direction === 'LEFT') {
      for (; i < arr.length; i++) {
        copiedArr.push(copiedArr.shift());
        if (copiedArr[0] === element) break;
      }
    } else if (direction === 'RIGHT') {
      for (i = 0; i < arr.length; i++) {
        copiedArr.unshift(copiedArr.pop());
        if (copiedArr[0] === element) break;
      }
    } else {
      throw new Error();
    }

    return { arr: copiedArr, count: i + 1 };
  };

  let elements = makeArrByLeng(N);

  for (const number of numbers) {
    const leftNum = findElementTh('LEFT', number, elements);
    const rightNum = findElementTh('RIGHT', number, elements);

    const minNumber = Math.min(leftNum.count, rightNum.count);

    if (leftNum.count === minNumber) {
      elements = leftNum.arr;
    } else {
      elements = rightNum.arr;
    }
    elements.shift();
    answer += minNumber;
  }
  return answer;
}
