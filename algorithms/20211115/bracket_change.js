let p = "()))((()";
// p = "(()())()";
// p = ")("
console.log(solution(p));
function solution(p) {
    var answer = '';
    const isRightBracket = (p) => { // 올바른 괄호 문자열인지
        let result = true;
        let stack = [];
        for (let i = 0; i < p.length; i++) {
            if (p[i] === ')') {
                if (stack[stack.length - 1] === '(') stack.pop();
                continue;
            }
            stack.push(p[i])
        }
        if (stack.length) result = false;
        return result;
    }
    const result = isRightBracket(p);
    if (result) return p;

    const seperate = (p) => { // 분리        
        let openB = 0;
        let closedB = 0;
        let u = '';
        let v = '';
        for (let i = 0; i < p.length; i++) {
            if (p[i] === '(') openB++;
            if (p[i] === ')') closedB++;

            if (openB === closedB) {
                u = p.substring(0, i + 1);
                v = p.substring(i + 1, p.length);
                break;
            }
        }
        return [u, v]
    }
    const changeRightBracket = (w) => {
        if (!w) return w;
        let [u, v] = seperate(w);
        if (isRightBracket(u)) {
            return u + changeRightBracket(v);
        }

        let newV = '(' + changeRightBracket(v) + ')';
        let newU = u.substring(1, u.length - 1).split('').map(e => {
            let bracket = e === ')' ? '(' : ')';
            return bracket;
        }).join('');
        console.log(newV)
        console.log(newU)
        return newV + newU;
    }

    answer = changeRightBracket(p);
    return answer;
}
