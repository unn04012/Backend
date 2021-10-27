let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
function solution(money, arr) {
    let answer = 0;
    let disCount = 0;
    arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let sum = arr[i][0] / 2 + arr[i][1];
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            console.log(sum)
            if (sum + arr[j][0] + arr[j][1] > money) break;
            sum += arr[j][0] + arr[j][1];
            count++;
        }
        console.log('---')
        if (count > answer) answer = count;
    }
    console.log(answer)
    return answer;
}