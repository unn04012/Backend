console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
function solution(leng, arr) {
    let answer = 0;
    let count = 1;
    for (let i = 0; i < leng; i++) {
        arr[i] === 1 ? answer += count++ : count = 1;
    }
    return answer;
}