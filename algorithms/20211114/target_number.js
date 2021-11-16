let numbers = [1, 1, 1, 1, 1];
let target = 3
console.log(solution(numbers, target))
function solution(numbers, target) {
    var answer = 0;
    const dfs = (depth, sum) => {
        if (depth > numbers.length) return;
        if (depth === numbers.length && sum === target) {
            answer++;
            return;
        }
        dfs(depth + 1, sum + numbers[depth])
        dfs(depth + 1, sum - numbers[depth])
    }
    dfs(0, 0);
    return answer;
}

function solution2(numbers, target) {
    var answer = 0;
    let numberCase = Math.pow(2, numbers.length - 1);

    let arr = [numbers[0]];
    let arrs = recursive(numbers, arr, 0, numberCase);
    let count = 0;
    console.log(arrs);
    answer = arrs.filter(v => Math.abs(v) === target).length;
    return answer;
}

function recursive(numbers, arrs, count, numberCase) {
    if (arrs.length >= numberCase) return arrs;
    count++;
    let plus = numbers[count];
    let minus = -numbers[count];
    let temp = []
    for (let j = 0; j < arrs.length; j++) {
        temp.push(arrs[j] + plus);
        temp.push(arrs[j] + minus);
    }
    return recursive(numbers, temp, count, numberCase);

}

