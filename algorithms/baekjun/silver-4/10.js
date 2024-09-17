let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

console.log(
  solution(
    input[0].split(' ').map((e) => Number(e)),
    input.slice(1)
  )
);

function solution([N, M], DNAs) {
  const hammingDistances = [];
  const makeNucleotide = () => {
    const nucleotide = {
      T: 0,
      A: 0,
      G: 0,
      C: 0,
    };
    return nucleotide;
  };

  for (let i = 0; i < M; i++) {
    const nucleotide = makeNucleotide();
    for (let j = 0; j < N; j++) {
      const dna = DNAs[j][i];
      nucleotide[dna]++;
    }
    hammingDistances.push(nucleotide);
  }
  const dna = [];
  let sum = 0;
  // 가장 높은 값을 뽑는다.
  for (const distance of hammingDistances) {
    const max = Math.max(...Object.values(distance));

    const founds = Object.keys(distance)
      .filter((key) => distance[key] === max)
      .sort();

    sum += Object.keys(distance)
      .filter((key) => key !== founds[0])
      .reduce((acc, cur) => acc + distance[cur], 0);

    dna.push(founds[0]);
  }
  return `${dna.join('')}\n${sum}`;
}
