import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card/Card";
import PokemonDetails from "../pages/PokemonDetails";
import "./Home.css";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

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
              <Link to={`/${pokemon.id}`} key={pokemon.id}>
                <Card key={pokemon.name} pokemon={pokemon} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
