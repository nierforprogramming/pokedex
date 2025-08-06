import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card/Card";
import "./Home.css";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const { loader, error, filteredPokemons } = useContext(PokemonContext);

  return (
    <section id="home">
      <div className="home-container">
        {loader ? (
          <Loader />
        ) : error ? (
          <p>Error loading Pokémon</p>
        ) : (
          <div className="home-pokemon-cards">
            {filteredPokemons.map((pokemon) => (
              <Card key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
