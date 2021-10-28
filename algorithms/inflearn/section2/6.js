let arr = [[10, 13, 10, 12, 15],
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr));
function solution(arr) {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    // 대각선
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i]
    }
    if (sum > max) max = sum;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sums = 0;
        for (let j = 0; j < arr.length; j++) {
            sums += arr[i][j]
        }
        if (sums > max) max = sums;
    }
    for (let i = 0; i < arr.length; i++) {
        let sums = 0;
        for (let j = 0; j < arr.length; j++) {
            sums += arr[j][i]
        }
        if (sums > max) max = sums;
    }
    answer = max;
    return answer;
}