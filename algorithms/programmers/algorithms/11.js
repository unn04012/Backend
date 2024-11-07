function solution(wallpaper) {
  var answer = [];

  const files = [];
  for (let i = 0; i < wallpaper.length; i++) {
    const paper = wallpaper[i]; //x
    for (let j = 0; j < paper.length; j++) {
      if (paper[j] === '#') {
        files.push([i, j]);
      }
    } //y
  }

  const minY = Math.min(...files.map((e) => e[0]));
  const minX = Math.min(...files.map((e) => e[1]));

  const maxY = Math.max(...files.map((e) => e[0]));
  const maxX = Math.max(...files.map((e) => e[1]));

  return [minY, minX, maxY + 1, maxX + 1];
}

console.log(solution(['..', '#.']));
