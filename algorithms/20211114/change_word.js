let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log", "cog"];
words = ["hot", "dot", "dog", "lot", "log"]
console.log(solution(begin, target, words))
function solution(begin, target, words) {
    var answer = 0;
    let checked = new Array(words.length).fill(false);
    if (!words.includes(target)) return 0;
    const is_valid = (w1, w2) => {
        let count = 0;
        for (let i = 0; i < w1.length; i++) {
            if (w1[i] !== w2[i]) count++;
        }
        return count === 1 ? true : false;
    }
    let queue = [[0, begin]];
    while (queue.length) {
        let [depth, word] = queue.shift();
        if (word === target) {
            answer = depth;
            break;
        }
        for (let i = 0; i < words.length; i++) {
            if (!checked[i] && is_valid(word, words[i])) {
                checked[word] = true;
                queue.push([depth + 1, words[i]]);
            }
        }
    }
    return answer;
}

function solution2(begin, target, words) {
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