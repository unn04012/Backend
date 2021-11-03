console.log(solution(3));
function solution(n) {
    let answer = [];
    let check = Array.from({ length: 4 }, () => 0);
    const DFS = (v) => {
        if (v === n + 1) {
            let temp = [];
            let flag = false;
            check.forEach(e => {
                if (e !== 0) flag = true;
            })
            if (!flag) return;
            for (let i = 1; i < v; i++) {
                if (check[i] !== 0) temp.push(i);
            }
            answer.push(temp)
        } else {
            check[v] = 1;
            DFS(v + 1);
            check[v] = 0;
            DFS(v + 1);
        }
    }
    DFS(1);
    return answer;
}