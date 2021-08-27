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

const bfs = (graph, startNode) => { // 2개의 큐를 사용한다.
    let visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들

    needVisit.push(startNode); // 노드 탐색 시작    
    while (needVisit.length !== 0) {
        const node = needVisit.shift();
        if (!visited.includes(node)) { // 탐색된적 없다면            
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
            console.log('visited : ', visited)
            console.log('needvisit : ', needVisit);
        }

    }
    return visited;
}
bfs(graph, 'A')

let arr1 = ['A'];
let arr2 = ['B', 'C'];
console.log([...arr1, ...arr2])
// console.log(bfs(graph, 'A'));