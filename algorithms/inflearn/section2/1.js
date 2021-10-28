let arr = [7, 3, 9, 5, 6, 12];
let num = 6;
console.log(solution(num, arr));
function solution(num, arr) {
    let answer = [];
    let prev = arr[0];
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (prev < arr[i]) answer.push(arr[i]);
        prev = arr[i];
    }
    return answer;
}