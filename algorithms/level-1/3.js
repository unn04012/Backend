// 1. 인덱스 위치를 기억해야 한다.
function solution(cards1, cards2, goal) {
  var answer = '';
  let c1Index = 0;
  let c2Index = 0;
  let gIndex = 0;
  const newArr = [];

  if (cards1[c1Index] === goal[gIndex]) {
    let hasSameValue = true;
    while (gIndex < goal.length && hasSameValue) {
      let flag = false;
      while (c1Index < cards1.length && cards1[c1Index] === goal[gIndex]) {
        newArr.push(goal[gIndex]);
        c1Index++;
        gIndex++;
        flag = true;
      }

      while (c2Index < cards2.length && cards2[c2Index] === goal[gIndex]) {
        newArr.push(goal[gIndex]);
        c2Index++;
        gIndex++;
        flag = true;
      }
      if (!flag) hasSameValue = false;
    }
  }

  if (cards2[c1Index] === goal[gIndex]) {
    let hasSameValue = true;
    while (gIndex < goal.length && hasSameValue) {
      let flag = false;
      while (c2Index < cards2.length && cards2[c2Index] === goal[gIndex]) {
        newArr.push(goal[gIndex]);
        c2Index++;
        gIndex++;
        flag = true;
      }

      while (c1Index < cards1.length && cards1[c1Index] === goal[gIndex]) {
        newArr.push(goal[gIndex]);
        c1Index++;
        gIndex++;
        flag = true;
      }
      if (!flag) hasSameValue = false;
    }
  }

  return newArr.length === goal.length ? 'Yes' : 'No';
}

const cards1 = ['i', 'drink', 'water'];
const cards2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water'];

const result = solution(cards1, cards2, goal);
console.log(result);
