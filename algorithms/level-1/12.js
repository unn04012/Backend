function solution(keymaps, targets) {
  var answer = [];

  for (const target of targets) {
    const targetCounts = []; // ABCD
    for (const alphabet of target) {
      // A
      const counts = [];
      for (let i = 0; i < keymaps.length; i++) {
        const keymap = keymaps[i]; // ABACD
        const index = keymap.indexOf(alphabet);
        if (index !== -1) counts.push(index + 1);
      }
      if (counts.length) {
        const minCounct = Math.min(...counts);

        targetCounts.push(minCounct);
      } else {
        targetCounts.push(-1);
      }
    }
    if (!targetCounts.length) return [-1];
    if (targetCounts.includes(-1)) {
      answer.push(-1);
    } else {
      answer.push(targetCounts.reduce((acc, cur) => acc + cur, 0));
    }
  }

  return answer;
}
const keymaps = ['BC'];
const targets = ['AC', 'BC'];
const result = solution(keymaps, targets);

console.log(result);
