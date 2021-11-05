let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
function solution(total, count, arr, number) {
    let answer = 0;
    const DFS = (L, start, sum, lang = '') => {
        if (L === count) {
            if (sum % number === 0) {
                console.log(sum)
                console.log(lang)
                answer++
            };
        } else {
            for (let i = start; i < arr.length; i++) {
                DFS(L + 1, i + 1, sum + arr[i], lang + '+' + sum + '+' + arr[i]);
            }
        }
    }
    DFS(0, 0, 0)
    return answer;
}