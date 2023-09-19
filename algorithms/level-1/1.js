function solution(players, callings) {
  const rankByPlayer = new Map();
  const playerByRank = new Map();
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    rankByPlayer.set(player, i + 1);
    playerByRank.set(i + 1, player);
  }

  for (const calling of callings) {
    const beforeRank = rankByPlayer.get(calling);
    const afterRank = beforeRank - 1;

    rankByPlayer.set(calling, afterRank);
    const beforePlayer = playerByRank.get(afterRank);

    rankByPlayer.set(beforePlayer, beforeRank);
    playerByRank.set(afterRank, calling);
    playerByRank.set(beforeRank, beforePlayer);
  }

  return Array.from(playerByRank.values());
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['soe', 'mumu'];
const result = solution(players, callings);

console.log(result);
