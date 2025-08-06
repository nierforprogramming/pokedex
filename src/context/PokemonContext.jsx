import { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../services/api";
import { getRandomPokemons } from "../utils/utils";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");

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
          setError(false);
        }
        setLoader(false);
      } catch (error) {
        setError(true);
        setLoader(false);
      }
    }

    _getAllPokemons();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPokemons(randomPokemons);
    } else {
      const filtered = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [search, allPokemons, randomPokemons]);

  const value = {
    allPokemons,
    error,
    loader,
    search,
    setSearch,
    randomPokemons,
    setRandomPokemons,
    filteredPokemons,
    setFilteredPokemons,
  };

  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
