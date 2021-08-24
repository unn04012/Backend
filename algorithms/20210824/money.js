let price = 3;
let money = 20;
let count = 4;

solution(price, money, count);

function solution(price, money, count) {
    var answer = -1;
    let prices = 0;

    for (let i = 1; i <= count; i++) {
        prices += (price * i);
    }
    if (money >= prices) return 0;
    answer = prices - money;
    return answer;
}