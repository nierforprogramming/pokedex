import axios from "axios";

// Get all base Pokémon entries
export async function getAllPokemons(limit = 50) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const { results } = response.data;

    // Fetch full details for each Pokémon in parallel
    const detailedData = await Promise.all(
      results.map(pokemon => getPokemonDetails(pokemon.url))
    );

    return detailedData;

  } catch (error) {
    console.error("Failed to fetch Pokémon:", error.message);
    return [];
  }
}

// Fetch individual Pokémon details
async function getPokemonDetails(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch details from ${url}:`, error.message);
    return null;
  }
}

// getAllPokemons().then(pokemons => {
//   console.log("All Pokémon details:", pokemons);
// });
