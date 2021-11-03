let weight = 259;
let arr = [81, 58, 42, 33, 61];
console.log(solution(weight, arr));
function solution(weight, arr) {
    let answer = 0;
    const DFS = (L, sum) => {
        if (L === arr.length) {
            if (sum <= weight && sum > answer) answer = sum;
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}