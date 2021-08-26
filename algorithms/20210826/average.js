let scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]];
scores = [[50, 90], [50, 87]];
solution(scores);
function solution(scores) {
    var answer = '';
    let averages = [];
    let scoreTable = {};
    scores.forEach((score, index) => {
        for (let i = 0; i < score.length; i++) {
            if (!scoreTable[i]) scoreTable[i] = [];
            scoreTable[i].push(score[i]);
        }
    });

    for (const [key, score] of Object.entries(scoreTable)) {
        let maxScore = Math.max(...score);
        let minScore = Math.min(...score);
        let self = score[key];

        let count = score.filter(element => element === self).length;
        if (count === 1) {
            if (self === maxScore || self === minScore) {
                score.splice(key, 1);
            }
        }
        let average = score.reduce((acc, cur) => acc + cur) / score.length;
        averages.push(average);

    };

    let result = averages.map((average) => {
        if (average >= 90) return 'A';
        else if (average >= 80) return 'B';
        else if (average >= 70) return 'C';
        else if (average >= 50) return 'D';
        else return 'F';
    });
    answer = result.join('');
    return answer;
}