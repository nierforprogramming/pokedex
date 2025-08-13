import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound/NotFound";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import "./pokedex.css";

const Pokedex = () => {
  const { loader, error, searchedPokemon } = useContext(PokemonContext);
  return (
    <div className="pokedex">
      <div className="pokedex-sh">
        <h1>Pokedex</h1>
      </div>
      {loader ? (
        <Loader />
      ) : error ? (
        <div className="not-found">
          <NotFound />
        </div>
      ) : searchedPokemon.length === 0 ? (
        <p>No Pokémon to display.</p>
      ) : (
        <div className="pokedex-cards">
          {searchedPokemon.map((pokemon) => (
            <Link to={`/${pokemon.id}`} key={pokemon.id}>
              <Card pokemon={pokemon} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
