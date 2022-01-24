function junsAlgo(stock, jun) {
  if (jun.cash >= stock) {
    const stocks = Math.floor(jun.cash / stock);
    const cash = stock * stocks;
    jun.cash -= cash;
    jun.shares += stocks;
    jun.stock = stock;
  }
  jun.asset = jun.cash + stock * jun.shares;
  return jun;
}
function sungsAlgo(stock, sung, stockState) {
  // 성민이가 매매를 할 경우
  if (stockState.days === 3 && stockState.state === "increase") {
    sung.cash += sung.shares * stock;
    sung.shares = 0;
  } else if (stockState.days >= 3 && stockState.state === "decrease") {
    const stocks = Math.floor(sung.cash / stock);
    const cash = stock * stocks;
    sung.cash -= cash;
    sung.shares += stocks;
    sung.stock = stock;
  }
  sung.asset = sung.cash + stock * sung.shares;
  return sung;
}
function solution(cash, stocks) {
  let answer = "";
  const stockState = { days: 0, state: "no change", stock: stocks[0] };
  let prevStock = stocks[0];
  let jun = { cash, shares: 0, stock: 0, asset: cash };
  let sung = { cash, shares: 0, stock: 0, asset: cash };
  stocks.forEach((stock, i) => {
    if (i >= 1) {
      if (stock > stockState.stock) {
        // 전일대비 상승
        if (stockState.state === "increase") {
          stockState.days++;
        } else {
          stockState.state = "increase";
          stockState.days = 1;
        }
      } else if (stock < stockState.stock) {
        // 전일대비 하락
        if (stockState.state === "decrease") {
          stockState.days++;
        } else {
          stockState.state = "decrease";
          stockState.days = 1;
        }
      } else {
        // 보합
        stockState.state = "no change";
        stockState.days = 0;
      }
      stockState.stock = stock;
      jun = junsAlgo(stock, jun);
      sung = sungsAlgo(stock, sung, stockState);
      return;
    }
    jun = junsAlgo(stock, jun);
  });

  if (sung.asset >= jun.asset) {
    answer = sung.asset === jun.asset ? "SAMESAME" : "TIMING";
  } else {
    answer = "BNP";
  }
  return answer;
}
let input = require("fs")
  .readFileSync("../../problem.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  solution(
    Number(input[0]),
    input[1].split(" ").map((e) => Number(e))
  )
);
