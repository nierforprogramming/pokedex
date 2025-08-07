import axios from "axios";

// Get all base Pokémon entries
export async function getAllPokemons() {
  try {
    // Total number of Pokemons available
        const metadata = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1");
        
            const totalCount = metadata.data.count
    
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
          
          return res.data
        }
               
      } catch (err) {
        console.error("Error fetching Pokémon", err);
      }
    }

// getAllPokemons().then(pokemons => {
//   console.log("All Pokémon details:", pokemons);
// });
