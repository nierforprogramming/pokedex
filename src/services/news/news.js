// Pokemon news
import axios from "axios";

import pokemonNews from './news.json'

export async function fetchPokemonNews() {
    try {
        // const response = await axios.get('http://localhost:3000/data')
        // const response = await axios.get(`https://api.worldnewsapi.com/search-news?api-key=${import.meta.env.VITE_API_KEY}&text=pokemon&language=en&source-country=us`)
       const response = pokemonNews       
        return response.data
        
    } catch (error) {
        console.log(error.message);
        
    }
}