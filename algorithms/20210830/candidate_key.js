let relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]];

solution(relation);
function solution(relation) {
    var answer = 0;
    let table = {};
    let notUnique = [];

    const isUnique = (arr) => {
        let result = true;
        arr.forEach((element, index) => {
            for (let i = index + 1; i < arr.length; i++) {
                if (element === arr[i]) result = false;
            }
        });
        return result;
    };

    relation.forEach((tuple) => {
        for (let i = 0; i < tuple.length; i++) {
            if (!table[i]) table[i] = [];
            table[i].push(tuple[i]);
        }
    });


    for (const [key, value] of Object.entries(table)) {
        if (isUnique(value)) answer++;
        else {
            notUnique.push(key);
        }
    }
    console.log(notUnique)
    console.log(table)
    return answer;
}