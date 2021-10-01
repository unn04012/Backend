// let m = "ABCDEFG";
// let musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];
m = "CC#BCC#BCC#BCC#B";
musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];
// m = 'ABC';
// musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
m = 'ABC';
musicinfos = ["00:00,00:06,HI,ABC#ABC"]
m = 'A#';
musicinfos = ["13:00,13:03,HAPPY,B#A#"];
console.log(solution2(m, musicinfos));

function solution(m, musicinfos) {
    var answer = '';
    let flag = false;
    let musics = [];
    const change = (melody) => {
        let changeMelody = [];
        for (let i = 0; i < melody.length; i++) {
            if (melody[i] === '#') changeMelody[i - 1] = melody[i - 1].toLowerCase()
            changeMelody.push(melody[i])
        }
        return changeMelody.join('');
    }
    if (m.includes('#')) m = change(m)
    musicinfos.forEach((music, index) => {
        let melody = ''
        let [start, end, title, score] = music.split(',');
        let playTime = (new Date('2021-09-30 ' + end) - new Date('2021-09-30 ' + start)) / (1000 * 60);
        for (let i = 0, j = 0, k = 0; i < playTime; i++) {
            if (score[j] === '#') {
                i--;
                k++;
                melody += score[j++];
                continue;
            }
            if ((i + k) % score.length === 0) j = 0;
            melody += score[j++];
            if (i === playTime - 1 && score[j] && score[j] === '#') melody += score[j]
        };
        console.log(melody)
        if (melody.includes('#')) {
            melody = change(melody)
        }
        if (melody.includes(m)) {
            flag = true; answer = title;
            musics.push({ time: playTime, title, sequence: index })
        }

    });
    if (!flag) return '(None)';
    if (musics.length > 1) {
        musics.sort((a, b) => {
            if (b.time === a.time) return a.sequence - b.sequence;
            return b.time - a.time
        })
    };
    if (musics.length === 0) return '(None)';
    return musics[0].title;
}
// let str1 = 'CC#BCC#BCC#BCC#B';
// let str2 = 'CC#BCC#BCC#BCC#BCC#BCC#BCC#BCC';
// if (str2.includes(str1)) console.log('this is includes')

function solution2(m, musicinfos) {
    let musics = [];

    const regexp = (e) => e[0].toLowerCase();

    if (m.includes('#')) m = m.replace(/[A-Z]#/g, regexp);
    musicinfos.forEach((music, index) => {
        let melody = ''
        let [start, end, title, score] = music.split(',');
        let playTime = (new Date('2021-09-30 ' + end) - new Date('2021-09-30 ' + start)) / (1000 * 60);
        score = score.replace(/[A-Z]#/g, regexp);
        melody = score.repeat(Math.ceil(playTime / score.length)).substring(0, playTime);

        if (melody.includes(m)) musics.push({ playTime, title, sequence: index });

    });
    if (musics.length > 1) {
        musics.sort((a, b) => {
            if (b.playTime === a.playTime) return a.sequence - b.sequence;
            return b.playTime - a.playTime
        })
    };
    return musics.length === 0 ? '(None)' : musics[0].title;
}