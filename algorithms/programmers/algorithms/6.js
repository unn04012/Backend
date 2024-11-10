function solution(plans) {
  const answer = [];

  const timeToMin = (startTime) => {
    const [hour, minute] = startTime.split(':');
    const allMinutes = Number(hour) * 60 + Number(minute);

    return allMinutes;
  };

  const sortedPlans = plans.map(([subject, startTime, playTime]) => [subject, timeToMin(startTime), Number(playTime)]).sort((a, b) => b[1] - a[1]);

  const stoppedPlans = [];
  while (sortedPlans.length) {
    const [subject, startTime, playTime] = sortedPlans.pop();

    if (sortedPlans[sortedPlans.length - 1]) {
      const nextPlan = sortedPlans[sortedPlans.length - 1];
      // 중간에 있으면
      if (startTime + playTime > nextPlan[1]) {
        const elaspedTime = nextPlan[1] - startTime; // 과제를 수행한 시간
        stoppedPlans.push([subject, playTime - elaspedTime]);

        continue;
      }
    }
    answer.push(subject);
    if (stoppedPlans.length) {
      const [stoppedSubject, elaspedTime] = stoppedPlans.pop();
      sortedPlans.push([stoppedSubject, startTime + playTime, elaspedTime]);
    }
  }

  return answer;
}

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ])
);
