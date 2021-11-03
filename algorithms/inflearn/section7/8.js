console.log(solution(3, 2));
function solution(n, m) {
    let answer = [];
    let temp = Array.from({ length: m }, () => 0);
    const DFS = (L) => {
        if (m === L) {
            answer.push(temp.slice());
        }
        else {
            for (let i = 1; i <= n; i++) {
                temp[L] = i;
                DFS(L + 1);
            }
        }
    }
    DFS(0);
    return answer;
}