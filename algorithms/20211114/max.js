let expression = "100-200*300-500+20";
console.log(solution(expression));
function solution(expression) {
    var answer = 0;
    let operations = new Set();
    expression.match(/[^0-9]/g).forEach(e => operations.add(e));
    operations = Array.from([...operations]);
    let checked = new Array(operations.length).fill(false);
    let priority = [];
    const dfs = (depth, start, arr = []) => {
        if (depth === operations.length) {
            priority.push([...arr]);
            return;
        }
        for (let i = 0; i < operations.length; i++) {
            if (!checked[i]) {
                checked[i] = true;
                arr.push(operations[i])
                dfs(depth + 1, i, arr);
                arr.pop();
                checked[i] = false;
            }

        }
    }
    dfs(0, 0);

    const calculate = (expression, oper) => {
        let idx = expression.indexOf(oper);
        if (idx !== -1) {
            expression.splice(idx - 1, 3, eval(expression.slice(idx - 1, idx + 2).join('')));
            calculate(expression, oper);

        }
        return expression;
    }
    priority.forEach(e => {
        let temp = expression.match(/\D|\w+/g);
        // e : -           
        temp = calculate(temp, e[0]);
        temp = calculate(temp, e[1]);
        answer = Math.max(answer, Math.abs(eval(temp.join(''))));
    })
    return answer;
}
// let str = "100-200*300-500+20";
// console.log(str.match(/\D|\w+/g))
