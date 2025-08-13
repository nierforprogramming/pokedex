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

  // Pagination state for news
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch All Pokémons once
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

  // Fetch Pokémon by search
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

  // Function to fetch news based on current page
  const fetchNewsData = async (page = 1) => {
    try {
      setLoader(true);
      setError(false);
      const offset = (page - 1) * itemsPerPage;
      const data = await fetchPokemonNews(offset, itemsPerPage);
      setPokemonNews(data);
    } catch (error) {
      setError(true);
      console.error("News fetch error:", error);
    } finally {
      setLoader(false);
    }
  };

  // Fetch news on currentPage change
  useEffect(() => {
    fetchNewsData(currentPage);
  }, [currentPage]);

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
    currentPage,
    setCurrentPage,
    itemsPerPage,
    fetchNewsData,
  };

  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
