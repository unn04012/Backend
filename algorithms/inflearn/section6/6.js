console.log(solution(8, 3));
function solution(counts, number) {
    let answer;
    let people = [];
    for (let i = 1; i <= counts; i++) people.push(i);
    let num = 1;
    while (people.length !== 1) {
        if (num === number) {
            num = 1;
            people.shift();
            continue;
        }
        people.push(people.shift());
        num++;
    }
    return answer;
}
