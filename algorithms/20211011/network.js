let n = 3;
let computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
computers = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
n = 2;
computers = [[1, 1], [1, 1]]
// computers = [[1, 1, 0], [1, 1, 1], [0, 1, 1]];
// n = 3;
//computers = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
solution(n, computers)

function solution(n, computers) {
    var answer = 0;
    if (n === 1) return 1;
    let visited = new Array(n).fill(false);
    //dfs    
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) answer++;
        let stack = [i];
        while (stack.length) {
            let node = stack.pop();
            visited[node] = true;
            computers[node].forEach((next, index) => {
                if (!visited[index] && next === 1) stack.push(index);
            })
            // for (let next of computers[node]) {
            //     if (!visited[next]) stack.push(next)
            // }
        }
        console.log(visited)
    }
    console.log(answer)
    return answer;
}



// function solution2(n, computers) {
//     let answer = 0;
//     const visited = [];

//     const dfs = (node, visited, computers) => {
//         visited[node] = true;	// 현재 node를 방문처리 하고
//         console.log(visited)
//         for (let i = 0; i < computers.length; i++) {
//             if (computers[node][i] === 1 && !visited[i]) 	// 연결된 노드가 있고 해당 노드를 방문하지 않았다면
//                 dfs(i, visited, computers);		// dfs로 방문 진행
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             dfs(i, visited, computers);	// 방문하지 않은 노드에서 dfs 탐색
//             answer++;	// 해당 시점에서는 위의 조건문으로 이미 위에 dfs 탐색에서 방문된 노드는 더 이상 방문하지 않는 것이 보장됨
//             // 따라서 그냥 방문 후 개수 count 해도 중복 발생 X
//         }
//     }

//     return answer;
// }

