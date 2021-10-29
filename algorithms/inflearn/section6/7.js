let a = "CBA";
let b = "CB";
console.log(solution(a, b));
function solution(needs, subjects) {
    let answer = 'YES';
    let queue = [];
    for (let need of needs) queue.push(need);

    for (let subject of subjects) {
        if (queue.includes(subject)) {
            if (queue.shift() !== subject) return 'NO'
        }
    }
    if (queue.length) return 'NO';
    return answer;
}