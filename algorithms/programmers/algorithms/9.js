function solution(babbling) {
  let answer = 0;
  const couldBabblings = ['aya', 'ye', 'woo', 'ma'];

  for (const element of babbling) {
    let babbling = element;

    for (let i = 0; i < couldBabblings.length; i++) {
      const bab = couldBabblings[i];

      if (!babbling.includes(bab + bab)) {
        babbling = babbling.replaceAll(bab, '-');
      }
    }
    let isDash = true;
    for (let i = 0; i < babbling.length; i++) {
      if (babbling[i] !== '-') {
        isDash = false;
        break;
      }
    }

    if (isDash) answer++;
  }
  return answer;
}

console.log(solution(['ayayeayayeaya', 'yeye']));
