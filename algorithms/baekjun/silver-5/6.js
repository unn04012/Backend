let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(input[0]));

function solution(board) {
  const splittedBoard = board.split('.');
  const answer = splittedBoard.map((e) => {
    const replacedA = e.replaceAll('XXXX', 'AAAA');
    const replacedB = replacedA.replaceAll('XX', 'BB');

    return replacedB;
  });

  if (answer.includes('X')) return -1;
  const answerToString = answer.join('.');

  return answerToString.includes('X') ? -1 : answerToString;
}
