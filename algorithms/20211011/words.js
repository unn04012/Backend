let begin = "hit"
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log", "cog"];
solution(begin, target, words);
function solution(begin, target, words) {
    var answer = 0;
    const is_valid = (word1, word2) => {
        let count = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) count++;
        }

        return count === 1 ? true : false;
    }

    const visited = {};
    const queue = [];
    queue.push(begin);
    visited[begin] = 0;

    while (queue.length) {
        const cur = queue.shift();
        console.log(cur, visited)
        if (cur === target) break;
        words.forEach(word => {
            if (is_valid(cur, word) && !visited[word]) {
                visited[word] = visited[cur] + 1;
                queue.push(word)
            }
        })
    }

    return visited[target] ? visited[target] : 0;
}