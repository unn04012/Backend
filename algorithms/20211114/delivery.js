let N = 5;
let road = [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]];
let K = 3;
console.log(solution(N, road, K));
function solution(N, road, K) {
    var answer = 0;
    let graph = Array.from({ length: N + 1 }, () => []);
    let dist = new Array(N + 1).fill(Infinity)

    road.forEach(([from, to, leng]) => {
        graph[from].push({ to, leng })
        graph[to].push({ to: from, leng })
    })
    dist[1] = 0;
    const stack = [{ to: 1, leng: 0 }];
    console.log(graph);
    while (stack.length) {
        console.log(stack)
        let { to, leng } = stack.pop();
        graph[to].forEach(next => {
            if (dist[next.to] > dist[to] + next.leng) {
                dist[next.to] = dist[to] + next.leng;
                stack.push(next);
            }
        })
    }
    return dist.filter(e => e <= K).length;
}