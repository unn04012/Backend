solution('KAKAO')
function solution(msg) {
    var answer = [];
    let dict = {};
    let count = 1;
    for (let i = 65; i <= 90; i++) {
        dict[String.fromCharCode(i)] = count++;
    }
    for (let i = 0; i < msg.length; i++) {
        let curInput = msg[i];
        if (i === msg.length - 1) answer.push(dict[curInput])
        for (let j = i + 1; j < msg.length; j++) {
            let nextInput = msg[j];
            console.log(curInput + nextInput)
            if (j === msg.length - 1 && dict[curInput + nextInput])
                answer.push(dict[curInput + nextInput])
            if (!dict[curInput + nextInput]) {
                answer.push(dict[curInput])
                dict[curInput + nextInput] = count++;
                break;
            }
            curInput += nextInput;
            i++;
        }

    }
    console.log(dict)
    console.log(answer)
    return answer;
}