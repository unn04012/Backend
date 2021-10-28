let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
function solution(a, b) {
    let answer = [];
    let RSP = { // key가 이길 수 있는 경우
        '1': 3,
        '2': 1,
        '3': 2
    }
    a.forEach((e, i) => {
        if (e === b[i]) {
            answer.push('D');
            return;
        }
        RSP[e] === b[i] ? answer.push('A') : answer.push('B');
    })
    return answer;
}