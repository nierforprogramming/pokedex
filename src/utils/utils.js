// Get random pokemons from array
export function getRandomPokemons(pokemonArray, count) {
  const shuffled = [...pokemonArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Colors for different types

export const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  poison: "#A040A0",
  psychic: "#F85888",
  flying: "#A890F0",
  fighting: "#C03028",
  fairy: "#EE99AC",
  ice: "#98D8D8",
  dragon: "#7038F8",
  ghost: "#705898",
  dark: "#705848",
  steel: "#B8B8D0",
  normal: "#A8A878",
};

