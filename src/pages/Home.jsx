import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card/Card";
import "./Home.css";
import { getRandomPokemons } from "../utils/utils";

const Home = () => {
  const { allPokemons } = useContext(PokemonContext);
  const [randomPokemons, setRandomPokemons] = useState([]);

  useEffect(() => {
    if (allPokemons.length > 0) {
      setRandomPokemons(getRandomPokemons(allPokemons, 10));
    }
  }, [allPokemons]);

  return (
    <section id="home">
      <div className="home-container">
        <div className="home-pokemon-cards">
          {randomPokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
