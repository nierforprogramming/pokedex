import { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../services/api";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    async function _getAllPokemons() {
      const _response = await getAllPokemons();
      setAllPokemons(_response);
    }

    _getAllPokemons();
  }, []);

  const value = {
    allPokemons,
  };
  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
