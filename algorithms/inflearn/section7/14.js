console.log(solution(4, 2));
function solution(n, count) {
    let answer = [];
    let temp = [];
    const DFS = (L, start) => {
        if (L > n) return;
        if (L === count) {
            answer.push([...temp])
        } else {
            for (let i = start; i <= n; i++) {
                temp[L] = i;
                DFS(L + 1, i + 1);
            }
        }

    }
    DFS(0, 1);
    return answer;
}