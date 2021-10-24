//console.log(solution(6, 7, 11))
console.log(solution(13, 33, 17))
function solution(a, b, c) {
    let answer = '';
    let edges = [a, b, c];
    edges.sort((a, b) => b - a);

    return edges[0] >= edges[1] + edges[2] ? 'NO' : 'YES'
}