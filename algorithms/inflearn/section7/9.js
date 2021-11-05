let arr = [1, 2, 5];
console.log(solution(15, arr));
function solution(total, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    let temp = Array.from({ length: arr.length }, () => 0);
    const DFS = (sum, count) => {
        if (sum > total) return;
        if (sum === total) {
            answer = Math.min(answer, count);
        } else {
            for (let i = 0; i < arr.length; i++) {
                DFS(sum + arr[i], count + 1);
            }
        }
    }
    DFS(0, 0);
    return answer;
}