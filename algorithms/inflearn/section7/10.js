let arr = [3, 6, 9];
console.log(solution(2, arr));
function solution(m, arr) {
    let answer = [];
    let checked = Array.from({ length: arr.length }, () => false);
    let tmp = [];
    const DFS = (L) => {
        if (L === m) {
            answer.push([...tmp]);
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (!checked[i]) {
                    checked[i] = true;
                    tmp[L] = arr[i];
                    DFS(L + 1);
                    checked[i] = false;
                }
            }
        }

    }
    DFS(0)
    return answer;
}