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


export function formatPokemonHeight(heightInDecimeters) {
  const totalFeet = heightInDecimeters * 0.328084;
  const feet = Math.floor(totalFeet);
  const inches = Math.round((totalFeet - feet) * 12);
  return `${feet}' ${inches}"`;
}

export function formatPokemonWeight(weightInHectograms) {
  const lbs = weightInHectograms * 0.220462;
  return `${lbs.toFixed(1)} lbs`;
}

export function cleanNewsText(text) {
  if (!text) return "";

  // Removes lines with links, navigation, disclaimers, etc.
  return text
    .split("\n")
    .filter(
      (line) =>
        line.trim() !== "" &&
        !line.includes("GamesRadar") &&
        !line.includes("Sign up") &&
        !line.includes("Weekly digests") &&
        !line.includes("Cookies policy") &&
        !line.includes("Privacy policy") &&
        !line.includes("Nintendo Switch 2") &&
        !line.includes("Contact") &&
        !line.includes("Review guidelines") &&
        !line.toLowerCase().startsWith("skip to main content") &&
        !line.includes("newsletter") &&
        !line.includes("footer") &&
        !line.includes("Login") &&
        !line.includes("comment") &&
        !line.includes("affiliate")
    )
    .join("\n");
}
