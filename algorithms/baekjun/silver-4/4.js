let input = require('fs').readFileSync('../problem.txt').toString().trim().split('\n');

const [pokemon, testCase] = input[0].split(' ').map((e) => Number(e));

console.log(solution(input.slice(1, pokemon + 1), input.slice(pokemon + 1, input.length)));

function solution(pokemons, problems) {
  const pokemonToNumSet = new Map();
  const numToPokemonSet = new Map();

  for (let i = 0; i < pokemons.length; i++) {
    pokemonToNumSet.set(pokemons[i], i + 1);
    numToPokemonSet.set(i + 1, pokemons[i]);
  }

  const answer = problems.map((e) => {
    if (isNaN(Number(e))) {
      return pokemonToNumSet.get(e);
    }
    return numToPokemonSet.get(Number(e));
  });

  return answer.join('\n');
}
