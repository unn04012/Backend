function solution(progresses, speeds) {
    var answer = [];
    let endTime = [];


    progresses.forEach((progress, index) => {
        let data = (100 - progress) % speeds[index];

        if (data === 0) endTime.push((100 - progress) / speeds[index]);
        else endTime.push(parseInt((100 - progress) / speeds[index]) + 1);

    })
    let count = 0;
    let maxEndTime = endTime[0];
    endTime.forEach((element, index) => {
        if (maxEndTime >= element) {
            count++;
            if (index === endTime.length - 1) {
                answer.push(count)
            };
        }
        else {
            answer.push(count);
            maxEndTime = element;
            count = 1;
            if (index === endTime.length - 1) {
                answer.push(count)
            };
        }
    })
    return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];

solution(progresses, speeds);