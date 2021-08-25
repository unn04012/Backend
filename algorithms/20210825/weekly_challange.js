/**
 * 
 * @param {*} table : 직업군 언어 점수를 정리한 문자열 배열
 * @param {*} languages : 개발자가 사용하는 언어
 * @param {*} preference : 언어 선호를 담은 정수 배열
 * @returns 
 */
function solution(table, languages, preference) {
    var answer = '';
    let langTable = {};
    let total = [];

    const convertNum = (index) => {
        switch (index) {
            case 0:
                return 5;
                break;
            case 1:
                return 4;
                break;
            case 2:
                return 3;
                break;
            case 3:
                return 2;
                break;
            case 4:
                return 1;
                break;
            default:
                return 0;
        }
    }
    table.forEach((element, index) => {
        let jobByLang = element.split(' ');
        if (!langTable[jobByLang[0]]) langTable[jobByLang[0]] = [];

        jobByLang.forEach((lang, index) => {
            if (index === 0) return;
            langTable[jobByLang[0]].push(lang);
        });
    });

    for (const [job, langs] of Object.entries(langTable)) {
        let sum = 0;
        languages.forEach((lang, index) => {
            let score = 0;
            let idx = langs.indexOf(lang); // 직업에 해당하는 index
            if (idx !== -1) score = convertNum(idx);
            sum += score * preference[index];
        })
        total.push({ job: job, score: sum });
    }
    total.sort((a, b) => {
        if (a.score === b.score) {
            if (a.job < b.job) return -1;
            if (a.job > b.job) return 1;
        }
        return b.score - a.score;
    })
    console.log(total);
    answer = total[0].job;
    return answer;
}

let table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
let languages = ["PYTHON", "C++", "SQL"];
let preference = [7, 5, 5];

table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
languages = ["JAVA", "JAVASCRIPT"];
preference = [7, 5];

solution(table, languages, preference);

// const maxValue = Math.max(1, 2, 5, 5, 5);
// console.log(maxValue);