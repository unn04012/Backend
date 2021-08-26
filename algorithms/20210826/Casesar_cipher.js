function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        let index = 0;
        if (s[i] === ' ') {
            answer += ' ';
            continue;
        };
        let ascCode = s.charCodeAt(i);
        let result = s[i].match(/[a-z]/g);
        if (result) { // 소문자
            if ((ascCode + n > 122)) {
                ascCode = ascCode - 25 - 1;
            }
        } else {
            if ((ascCode + n > 90)) {
                ascCode = ascCode - 25 - 1;
            }
        }
        answer += String.fromCharCode(ascCode + n);
    }

    return answer;
}

solution('Y', 2);