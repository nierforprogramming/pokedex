import axios from "axios";

// Get all base Pokémon entries
export async function getAllPokemons() {
  try {
    // Total number of Pokemons available
        const metadata = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1");
        
            const totalCount =  50
    
            //
    // Fetching all pokemons dynamically even if pokemon number increases in future

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalCount}`);
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

// Get single pokeom
export async function fetchSinglePokemon(id) {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (res.data) {
          console.log(res.data);
                 
          return res.data
        }
            throw new Error("No data returned");
      } catch (err) {
        console.error("Error fetching Pokémon", err);
        throw err
      }
    }

// Get evolution chain name
export async function getEvolutionChainNames(pokemonId) {
  try {
    const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    const evoChainUrl = speciesResponse.data.evolution_chain?.url;

    if (!evoChainUrl) throw new Error("No evolution chain found for this species.");

    const chainResponse = await axios.get(evoChainUrl);
    const names = extractEvolutionNames(chainResponse.data.chain);

    return names;
  } catch (error) {
    console.error("Evolution chain fetch error:", error.message);
    return []; // Fallback to empty array on error
  }
}

// Utility to traverse the chain
function extractEvolutionNames(chainNode, result = []) {
  if (!chainNode) return result;
  result.push(chainNode.species.name);
  chainNode.evolves_to.forEach((next) => extractEvolutionNames(next, result));
  return result;
}

// getAllPokemons().then(pokemons => {
//   console.log("All Pokémon details:", pokemons);
// });
