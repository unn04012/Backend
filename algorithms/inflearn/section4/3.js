let N = 4;
let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(N, arr));
function solution() {
    let answer;
    let ranks = {};
    let pair = [];
    arr.forEach((e, index) => {
        for (let i = 0; i < e.length; i++) {
            if (!ranks[e[i]]) ranks[e[i]] = [];
            ranks[e[i]].push(i + 1);
        }
    })
    for (let i = 1; i <= N; i++) { // 1번째        
        for (let j = 1; j <= N; j++) { // 1번째
            let flag = true;
            if (i === j) continue;
            for (let k = 0; k < ranks[j].length; k++) {
                if (ranks[i][k] > ranks[j][k]) flag = false;
            }
            if (flag) pair.push([i, j])
        }

    }
    answer = pair.length
    return answer;
}