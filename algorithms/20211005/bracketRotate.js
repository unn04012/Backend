let s = "[](){}";
solution2(s);
function solution(s) {
    var answer = 0;
    let arr = s.split('');
    const pair = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    const is_valid = arr => {
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (!pair[arr[i]]) stack.push(arr[i]);
            else {
                if (stack[stack.length - 1] !== pair[arr[i]]) return false
                stack.pop();
            }
        }
        if (stack.length !== 0) return false;
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        let first = arr[0];
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = first;
        if (is_valid(arr)) answer++;

    }
    return answer;
}

function solution2(s) {
    if (s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}": "{", "]": "[", ")": "(" };

    for (let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        console.log(rotate)
    }

    return answer;
}
