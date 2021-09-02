let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Change uid4567 Ryan"]
solution(record);
function solution(record) {
    var answer = [];
    let idTable = {};
    record.forEach(element => {
        let arr = element.split(' ');
        if (arr[0] === 'Leave') return;
        idTable[arr[1]] = arr[2];
    });

    record.forEach(element => {
        let arr = element.split(' ');
        if (arr[0] === 'Change') return;
        let msg = '';
        msg += idTable[arr[1]] + "님이"

        msg += arr[0] === 'Enter' ? ' 들어왔습니다.' : ' 나갔습니다.';

        answer.push(msg);
    });

    console.log(answer)
    return answer;
}

function solution(record) {
    var answer = [];
    let records = [];
    let users = {};
    record.forEach(element => {
        let arr = element.split(' ');
        records.push({ state: arr[0], id: arr[1], nick: arr[2] });

    })

    records.forEach(element => {
        if (!element.nick) return;
        users[element.id] = element.nick
    })

    for (let i = 0; i < records.length; i++) {
        switch (records[i].state) {
            case 'Enter':
                answer.push(`${users[records[i].id]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(`${users[records[i].id]}님이 나갔습니다.`);
                break;
        }
    }
    return answer;
}