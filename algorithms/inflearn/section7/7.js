let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));
function solution(time, ps, pt) {
    let answer = 0;
    const DFS = (L, sum, scoreSum) => {
        if (sum > time) return;
        if (L === ps.length) {
            answer = Math.max(answer, scoreSum)
        } else {
            DFS(L + 1, sum + pt[L], scoreSum + ps[L]);
            DFS(L + 1, sum, scoreSum);
        }

    }
    DFS(0, 0, 0)
    return answer;
}