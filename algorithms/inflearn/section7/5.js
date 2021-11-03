let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
function solution(arr) {
    let answer = 'NO';
    let total = arr.reduce((a, b) => a + b, 0);
    const DFS = (L, sum) => {
        if (L === arr.length) {
            if ((total - sum) === sum) {
                answer = 'YES';
                return;
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0)
    return answer;
}