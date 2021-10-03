let n = 3;
let words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
// n = 2;
// words = ["hello", "one", "even", "never", "now", "world", "draw"]
n = 5;
words = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]

solution(n, words);
function solution(n, words) {
    var answer = [];
    let flag = true;
    let used_words = [];
    let num = 1, sequence = 1;

    words.forEach((word, index) => {
        if (!flag) return;
        if (num > n) {
            sequence++;
            num = 1
        };
        let last_word = word[0];
        // let sequence = (index + 1) % n === 0 ? n : (index + 1) % n;        
        if (!used_words.includes(word)) {
            // 마지막으로 사용된 단어의 마지막과 일치하는지 확인
            if (index === 0) {
                used_words.push(word);
                num++;
                return;
            }

            let last_used_words = used_words[used_words.length - 1];
            if (last_used_words[last_used_words.length - 1] === last_word) {
                used_words.push(word);
            } else {
                flag = false;
                answer = [num, sequence]
            }
        } else {
            answer = [num, sequence]
            flag = false;
        }
        num++;
    })
    if (flag) return [0, 0];
    return answer;
}