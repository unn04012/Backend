console.log(solution(1));
function solution(n) {
    let answer;
    const DFS = (v) => {
        if (v > 7) return;

        DFS(v * 2);
        DFS(v * 2 + 1);
        console.log(v);
    }
    DFS(n);
    return answer;
}