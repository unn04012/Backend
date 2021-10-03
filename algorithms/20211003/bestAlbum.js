
let genres = ["classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
genres = ["classic", "pop", "classic", "classic", "jazz", "pop", "Rock", "jazz"];
plays = [500, 600, 150, 800, 1100, 2500, 100, 1000];
genres = ['A', 'A', 'B'];
plays = [600, 500, 300];


solution(genres, plays)
function solution(genres, plays) {
    var answer = [];
    let genresMap = {};
    let totalPlay = {};
    let playArray = [];
    genres.forEach((gener, index) => {
        if (!genresMap[gener]) {
            genresMap[gener] = [];
            totalPlay[gener] = 0;
        };
        totalPlay[gener] += plays[index]
        // if (genresMap[gener].length >= 2) return;
        genresMap[gener].push({ index, plays: plays[index] })
    });
    // console.log(genresMap)
    for (const [key, value] of Object.entries(genresMap)) {
        value.sort((a, b) => {
            if (b.plays === a.plays) return a.index - b.index
            return b.plays - a.plays;
        });
        playArray.push({ key, play: totalPlay[key] });
    }
    console.log(genresMap)
    playArray.sort((a, b) => b.play - a.play);
    playArray.forEach(gener => {
        for (let i = 0; i < 2; i++) {
            if (genresMap[gener.key].length === 1) {
                answer.push(genresMap[gener.key][0].index);
                break;
            }
            answer.push(genresMap[gener.key][i].index);
        }
    })
    console.log(playArray);
    console.log(answer)
    return answer;
}
/**
 * genresMap = {
 *  'classic' : {
 * }
 * }
 */