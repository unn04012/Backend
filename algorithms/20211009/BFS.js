const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

let visit = {};
for (let node in graph) {
    visit[node] = false;
}
let queue = [['A', null]];
while (queue.length) {
    let [cur, parent] = queue.shift();
    console.log(cur, parent)
    visit[cur] = true;
    for (const next of graph[cur]) {
        //console.log(next)
        if (!visit[next]) {
            queue.push([next, cur]);
        }
    }
}