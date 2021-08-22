function solution(priorities, location) {
    var answer = 1;
    let objPriority = [];

    priorities.forEach((priority, index) => {
        objPriority.push({ key: index, value: priority });
    })

    for (let i = 0; i < objPriority.length; i++) {
        let flag = true;
        if (objPriority.length === 1) break;
        for (let j = i + 1; j < objPriority.length; j++) {
            if (objPriority[j].value > objPriority[i].value) {
                flag = false;
                objPriority.push(objPriority[0]);
                objPriority.shift();
                continue;
            }
        }
        if (flag) {
            let element = objPriority.shift();
            if (element.key === location) break;
            answer++;
        }
        i--;

    }
    return answer;
}

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

// priorities = [2, 1, 3, 2];
// location = 2;

console.log(solution(priorities, location));