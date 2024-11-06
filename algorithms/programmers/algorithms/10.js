function solution(picks, minerals) {
  const fatigue = { diamond: [1, 5, 25], iron: [1, 1, 5], stone: [1, 1, 1] };

  // 광물을 5개씩 그룹화하여 피로도를 계산

  // 곡괭이로 캘 수 있는 최대 광물 수 계산
  const maxPickCapacity = (picks[0] + picks[1] + picks[2]) * 5;
  const limitedMinerals = minerals.slice(0, maxPickCapacity);

  const mineralGroups = [];
  for (let i = 0; i < limitedMinerals.length; i += 5) {
    mineralGroups.push(minerals.slice(i, i + 5));
  }

  // 각 그룹에 대해 피로도를 계산하여 저장
  const fatiguePerGroup = mineralGroups.map((group) => {
    const fatigueSum = [0, 0, 0]; // 다이아, 철, 돌 곡괭이 사용 시 피로도
    group.forEach((mineral) => {
      fatigueSum[0] += fatigue[mineral][0]; // 다이아 곡괭이 사용 시 피로도
      fatigueSum[1] += fatigue[mineral][1]; // 철 곡괭이 사용 시 피로도
      fatigueSum[2] += fatigue[mineral][2]; // 돌 곡괭이 사용 시 피로도
    });
    return { group, fatigueSum };
  });

  // 피로도 기준 정렬 (다이아 곡괭이가 필요한 그룹 우선순위로)
  fatiguePerGroup.sort((a, b) => b.fatigueSum[2] - a.fatigueSum[2]);

  let totalFatigue = 0;

  // 다이아, 철, 돌 곡괭이를 순서대로 사용하여 최소 피로도 계산
  for (const { fatigueSum } of fatiguePerGroup) {
    if (picks[0] > 0) {
      // 다이아 곡괭이 사용
      totalFatigue += fatigueSum[0];
      picks[0]--;
    } else if (picks[1] > 0) {
      // 철 곡괭이 사용
      totalFatigue += fatigueSum[1];
      picks[1]--;
    } else if (picks[2] > 0) {
      // 돌 곡괭이 사용
      totalFatigue += fatigueSum[2];
      picks[2]--;
    } else {
      break; // 곡괭이가 다 떨어지면 종료
    }
  }

  return totalFatigue;
}

// 테스트 케이스
const picks = [1, 0, 1];
const minerals = ['stone', 'stone', 'stone', 'stone', 'stone', 'iron', 'iron', 'iron', 'iron', 'iron', 'diamond', 'diamond'];
console.log(solution(picks, minerals)); // 10
