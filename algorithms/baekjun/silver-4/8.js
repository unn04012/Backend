let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(input[0]));

function solution(ticket) {
  let maxTicketLength = 0;

  const maxLeng = ticket.length / 2;

  const findLuckTicket = (sub1, sub2) => {
    const addStr = (numberStr) => {
      return numberStr.split('').reduce((acc, cur) => acc + Number(cur), 0);
    };

    return addStr(sub1) === addStr(sub2);
  };

  for (let i = 1; i <= maxLeng; i++) {
    for (let j = 0; j < ticket.length; j++) {
      const sub1 = ticket.slice(j, j + i);
      const sub2 = ticket.slice(j + i, j + i + i);

      if (sub1.length !== sub2.length) break;

      const isLuckTicket = findLuckTicket(sub1, sub2);
      if (isLuckTicket) {
        maxTicketLength = Math.max(maxTicketLength, sub1.length + sub2.length);
        break;
      }
    }
  }
  return maxTicketLength;
}
