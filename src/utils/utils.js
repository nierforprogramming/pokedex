// Get random pokemons from array
export function getRandomPokemons(pokemonArray, count) {
  const shuffled = [...pokemonArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
