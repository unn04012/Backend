let input = require('fs').readFileSync('../../problem.txt').toString().trim().split('\n');

function solution(testCaseCount, testCases) {
  const answer = [];
  const printCondition = (documentsPriorityOrder) => {
    const firstPrioritoy = documentsPriorityOrder[0].priority;
    return documentsPriorityOrder.slice(1).filter((element) => element.priority > firstPrioritoy)
      .length;
  };

  for (const [[count, order], documentsPriority] of testCases) {
    const findDocument = documentsPriority[order];
    const documentsPriorityOrders = documentsPriority.map((e, i) => {
      return {
        priority: e,
        order: i,
      };
    });

    let defaultOrder = 1;
    while (documentsPriority.length) {
      while (printCondition(documentsPriorityOrders))
        documentsPriorityOrders.push(documentsPriorityOrders.shift());

      const document = documentsPriorityOrders.shift();

      if (document.priority === findDocument && document.order === order) {
        answer.push(defaultOrder);
        break;
      }
      defaultOrder++;
    }
  }
  return answer.join('\n');
}

const testCaseCount = Number(input[0]);
const arr = input.slice(1);
const testCases = [];
for (let i = 0; i < arr.length; i += 2) {
  const temp = [];
  if (i % 2 === 0) temp.push(arr[i].split(' ').map((e) => Number(e)));
  temp.push(arr[i + 1].split(' ').map((e) => Number(e)));
  testCases.push(temp);
}

console.log(solution(testCaseCount, testCases));
