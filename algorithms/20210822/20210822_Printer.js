function solution(priorities, location) {
    var answer = 0;


    let count = 0;
    let maxPriority = priorities[0];
    let data = { '0': 1, '1': 2 };
    delete data['0'];
    console.log(data);
    data['0'] = 1;
    console.log(data);


    for (let i = 0; i < priorities.length; i++) {
        let flag = true;
        for (let j = i + 1; j < priorities.length; j++) {
            if (priorities[j] > priorities[i]) {
                flag = false;
                priorities.push(priorities[i]);
                priorities.shift();
                i--;
                continue;
            }
        }
        // if(flag){
        //     if(count === location) console.log()
        //     priorities.shift();
        //     count++;
        // }
    }
    console.log(priorities);

    return answer;
}

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

solution(priorities, location);