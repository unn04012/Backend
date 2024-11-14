function solution(bandage, health, attacks) {
  var answer = 0;
  const recover = (currentHealth, quantity) => {
    return Math.min(health, currentHealth + quantity);
  };
  const attacked = (currentHealth, quantity) => {
    return currentHealth - quantity;
  };
  const foundAttackTime = (time) => {
    return attacks.find((e) => e[0] === time);
  };

  const maxTime = attacks[attacks.length - 1][0];
  const [total, recoverbySec, addedHealth] = bandage;

  let continueRecoverTime = 0;
  let currentHealth = health;

  for (let i = 1; i <= maxTime; i++) {
    const isAttacked = foundAttackTime(i);
    if (isAttacked) {
      const [_, quantity] = isAttacked; // 공격시간, 피해량

      currentHealth = attacked(currentHealth, quantity);
      if (currentHealth <= 0) return -1;

      continueRecoverTime = 0;
      continue;
    }

    continueRecoverTime++;

    currentHealth = recover(currentHealth, recoverbySec);
    if (continueRecoverTime === total) {
      continueRecoverTime = 0;
      currentHealth = recover(currentHealth, addedHealth);
    }
  }
  return currentHealth;
}

// console.log(
//   solution([5, 1, 5], 30, [
//     [2, 10],
//     [9, 15],
//     [10, 5],
//     [11, 5],
//   ])
// );

// console.log(
//   solution([3, 2, 7], 20, [
//     [1, 15],
//     [5, 16],
//     [8, 6],
//   ])
// );

console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ])
);
