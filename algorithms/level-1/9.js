function solution(s, skip, index) {
  var answer = '';

  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const removedSkippedAlphbets = alphabets.filter((e) => !skip.includes(e));

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    const nextIndex = removedSkippedAlphbets.findIndex((e) => e === element);
    let nextAlphabetIndex = index + nextIndex;

    if (nextAlphabetIndex >= removedSkippedAlphbets.length) {
      nextAlphabetIndex = nextAlphabetIndex % removedSkippedAlphbets.length;
    }

    answer += removedSkippedAlphbets[nextAlphabetIndex];
  }

  return answer;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;
const result = solution(s, skip, index);

console.log(result);
