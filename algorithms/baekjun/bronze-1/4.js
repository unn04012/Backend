let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');
// var util = require("util");

console.log(
  solution(
    Number(input[0]),
    input.slice(1).map((e) => Number(e))
  )
);

function solution(N, changes) {
  const answer = [];

  const coins = [25, 10, 5, 1];

  const defineNumCoin = (change) => {
    const [quarter, dime, nickel, penny] = coins;

    let currentChange = change;
    let numCoins = [];

    const numQuarter = Math.floor(currentChange / quarter); // 버림'
    currentChange -= quarter * numQuarter;

    const numDime = Math.floor(currentChange / dime); // 버림'
    currentChange -= dime * numDime;

    const numNickel = Math.floor(currentChange / nickel); // 버림'
    currentChange -= nickel * numNickel;

    const numPenny = Math.floor(currentChange / penny); // 버림'

    currentChange -= penny * numQuarter;
    numCoins.push(numQuarter, numDime, numNickel, numPenny);

    return numCoins;
  };

  for (const change of changes) {
    answer.push(defineNumCoin(change));
  }

  return answer.map((e) => e.join(' ')).join('\n');
}
