function solution(bookTimes) {
  let answer = 0;

  const rooms = [];

  bookTimes.sort((a, b) => {
    const startA = new Date(`1970-01-01T${a[0]}:00`).getTime();
    const startB = new Date(`1970-01-01T${b[0]}:00`).getTime();
    return startA - startB;
  });

  const timeToMin = (time) => {
    const [hour, minute] = time.split(':').map((e) => Number(e));

    return hour * 60 + minute;
  };

  // 입장시간, 종료시간
  for (const [start, end] of bookTimes) {
    // find room space
    let isEmptyRoom = false;
    for (let i = 0; i < rooms.length; i++) {
      // 입실한 시간, 종료 시간
      const [_, ended] = rooms[i];
      // 입실한 시간이 방 종료가 됐을 경우

      if (timeToMin(start) >= timeToMin(ended) + 10) {
        isEmptyRoom = true;
        rooms[i] = [start, end];
        break;
      }
    }
    if (!isEmptyRoom) {
      rooms.push([start, end]);
      answer++;
    }
  }

  return answer;
}
console.log(
  solution([
    ['09:10', '09:20'],
    ['09:30', '09:40'],
    ['09:20', '09:40'],
  ])
);
