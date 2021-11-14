let n = 6;
let vertex = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
// n = 5;
// vertex = [[4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n, vertex));
function solution(n, vertex) {
    var answer = 0;
    let graph = Array.from({ length: n }, () => []);
    let visited = [1];
    let queue = [0];

    vertex.forEach(([start, end]) => {
        graph[start - 1].push(end - 1);
        graph[end - 1].push(start - 1);
    })
    console.log(graph)
    while (queue.length) {
        console.log(queue)
        let cur = queue.shift();
        for (const next of graph[cur]) {
            if (!visited[next]) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
        console.log(visited)
    }
    let max = Math.max(...visited);
    console.log(visited);
    return visited.filter(e => e === max).length;
}