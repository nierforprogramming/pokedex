import { createContext, useEffect, useState } from "react";
import { fetchSinglePokemon, getAllPokemons } from "../services/api";
import { getRandomPokemons } from "../utils/utils";
import { fetchPokemonNews } from "../services/news/news";

const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState([]);
  const [pokemonNews, setPokemonNews] = useState([]);
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    async function _getAllPokemons() {
      try {
        setLoader(true);
        const _response = await getAllPokemons();

        if (_response.length > 0) {
          setAllPokemons(_response);
          const random = getRandomPokemons(_response, 10);
          setRandomPokemons(random);
          setFilteredPokemons(random);
          setSearchedPokemon(random);
          setError(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    _getAllPokemons();
  }, []);

  useEffect(() => {
    async function _fetchSinglePokemon() {
      const query = search.trim().toLowerCase();

      if (!query) {
        setSearchedPokemon(randomPokemons);
        setError(false);
        return;
      }

      setLoader(true);
      setSearchedPokemon([]);
      setError(false);

      const matches = randomPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        setSearchedPokemon(matches);
        setLoader(false);
        return;
      }

      try {
        const response = await fetchSinglePokemon(query);
        if (!response) throw new Error("Pokémon not found");
        setSearchedPokemon([response]);
      } catch (error) {
        setError(true);
        setSearchedPokemon([]);
      } finally {
        setLoader(false);
      }
    }

    _fetchSinglePokemon();
  }, [search, randomPokemons]);

  useEffect(() => {
    async function _fetchPokemonNews() {
      try {
        setLoader(true);
        setError(null);
        const response = await fetchPokemonNews();

        if (response) {
          setLoader(false);
          setError(false);
          setPokemonNews(response);
        }
      } catch (error) {
        setLoader(true);
        setError(false);
        console.log(error.message);
      }
    }
    _fetchPokemonNews();
  }, []);

  const value = {
    allPokemons,
    error,
    loader,
    search,
    setSearch,
    setLoader,
    randomPokemons,
    setRandomPokemons,
    filteredPokemons,
    setFilteredPokemons,
    selectedPokemon,
    setSelectedPokemon,
    searchedPokemon,
    pokemonNews,
    searching,
    setSearching,
  };

  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
