let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(solution(Number(input[0]), input.slice(1, input.length)));

function solution(num, wordsList) {
  const answer = [];
  const shortKey = new Set();

  for (const words of wordsList) {
    const wordsArr = words.split(' '); // save as

    let flag = false;
    let nextFlag = false;
    for (let i = 0; i < wordsArr.length; i++) {
      const word = wordsArr[i][0].toLowerCase();

      if (!shortKey.has(word)) {
        shortKey.add(word);
        answer.push(wordsArr.slice(0, i).join(' ') + replaceAt(0, wordsArr[i]) + wordsArr.slice(i + 1, wordsArr.length).join(' '));
        flag = true;
        break;
      }
    }

    if (!flag) {
      for (let i = 0; i < wordsArr.length; i++) {
        const word = wordsArr[i];
        for (let j = 0; j < word.length; j++) {
          const lowerWord = word[j].toLowerCase();
          if (!shortKey.has(lowerWord)) {
            answer.push(wordsArr.slice(0, i).join(' ') + replaceAt(j, wordsArr[i]) + wordsArr.slice(i + 1, wordsArr.length).join(' '));
            shortKey.add(lowerWord);
            nextFlag = true;
            break;
          }
        }
        if (nextFlag) break;
      }
    }

    if (!flag && !nextFlag) {
      answer.push(wordsArr.join(' '));
    }
  }

  return answer.map((e) => e.trim()).join('\n');
}

function replaceAt(index, str) {
  const shortKey = `[${str[index]}]`;

  return ' ' + str.substring(0, index) + shortKey + str.substring(index + 1, str.length) + ' ';
}
