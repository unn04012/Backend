let A = [1, 4, 2];
let B = [5, 4, 4];
A = [1, 2];
B = [3, 4]
solution(A, B);
function solution(A, B) {
    var answer = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    for (let i = 0; i < A.length; i++) {
        answer += (A[i] * B[i])
    }

    return answer;
}