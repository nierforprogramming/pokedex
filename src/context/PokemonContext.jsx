import { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../services/api";

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function _getAllPokemons() {
      try {
        setLoader(true);
        const _response = await getAllPokemons();

        if (_response.length > 0) {
          setAllPokemons(_response);
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

  const value = {
    allPokemons,
    error,
    loader,
  };
  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
