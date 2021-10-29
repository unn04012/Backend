let str = "352+*9-";
console.log(solution(str));
function solution(str) {
    let stack = [];
    let operator = ['+', '-', '*', '/'];
    for (let char of str) {
        if (operator.includes(char)) { // if(!isNaN(char))
            let right = stack.pop();
            let left = stack.pop();
            stack.push(eval(left + char + right));
            continue;
        }
        stack.push(char);
    }
    return stack[0];
}