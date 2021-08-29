const { count } = require("console");
const { application, json } = require("express");

let info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];

let query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

// solution(info, query);
function solution(info, query) {
    let infoTable = info.map((element, index) => {
        let eachInfo = element.split(' ');
        return eachInfo;
    });

    // infoTable.sort((a, b) => {
    //     return a[4] - b[4];
    // })
    // console.log(infoTable);

    let answer = query.map((element, index) => {
        let count = 0;
        let eachQuery = element.split(' and ');
        let lastQuery = eachQuery[3].split(' ');
        eachQuery[3] = lastQuery[0];
        eachQuery[4] = lastQuery[1];
        console.log(eachQuery);
        for (let i = 0; i < infoTable.length; i++) {
            let flag = true;
            for (let j = 0; j < 5; j++) {
                if (j === 4) {
                    if (Number(infoTable[i][j]) < Number(eachQuery[j])) {
                        flag = false;
                        break;
                    }
                } else {
                    if (eachQuery[j] === '-') continue;
                    if (infoTable[i][j] !== eachQuery[j]) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) count++;
        }

        return count;
    });

    return answer;
}
// solution2(info, query);
function solution2(info, query) {
    let answer;
    let infoScores = [];
    let queryScores = [];
    let infoTable = info.map((element, index) => {
        let eachInfo = element.split(' ');
        infoScores.push(eachInfo[4])
        return {
            lang: eachInfo[0],
            job: eachInfo[1],
            career: eachInfo[2],
            food: eachInfo[3],
        };
    });
    let queryTable = query.map(element => {
        let eachQuery = element.split(' and ');
        eachQuery[3] = eachQuery[3].split(' ');
        queryScores.push(eachQuery[3][1]);
        return {
            lang: eachQuery[0],
            job: eachQuery[1],
            career: eachQuery[2],
            food: eachQuery[3][0],
        };
    });
    answer = queryTable.map((qs, index) => {
        let count = 0;
        for (let i = 0; i < infoTable.length; i++) {
            if (JSON.stringify(qs) === JSON.stringify(infoTable[i])) {
                if (infoScores[i] >= queryScores[index]) count++;
            } else {
                console.log(index, qs, infoTable[i])
            }
        }
        return count;
    })
    console.log(answer);
    return answer;
}

solution3(info, query);
function solution3(info, query) {
    let answer;
    let infoScores = [];
    let queryScores = [];

    let infoTable = {
        lang: [],
        job: [],
        career: [],
        food: [],
        score: [],
    };

    let queryTable = {
        lang: [],
        job: [],
        career: [],
        food: [],
        score: [],
    };

    info.forEach(element => {
        let eachInfo = element.split(' ');
        let i = 0;
        for (const [key, value] of Object.entries(infoTable)) {
            value.push(eachInfo[i]);
            i++;
        }
    });
    query.forEach(element => {
        let eachQuery = element.split(' and ');
        let lastQuery = eachQuery[3].split(' ');
        eachQuery[3] = lastQuery[0];
        eachQuery[4] = lastQuery[1];
        let i = 0;
        for (const [key, value] of Object.entries(queryTable)) {
            value.push(eachQuery[i]);
            i++;
        }
    });


    for (const [key, value] of Object.entries(queryTable)) {

        for (const [infoKey, infoValue] of Object.entries(queryTable)) {

        }
    }

    // console.log(infoTable);

    return answer;
}
