import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./Home.css";
import NotFound from "../components/NotFound/NotFound";

const Home = () => {
  const { loader, error, searchedPokemon } = useContext(PokemonContext);

  return (
    <section id="home">
      <div className="home-container">
        {loader ? (
          <Loader />
        ) : error ? (
          <div className="not-found">
            <NotFound />
          </div>
        ) : searchedPokemon.length === 0 ? (
          <p>No Pokémon to display.</p>
        ) : (
          <div className="home-pokemon-cards">
            {searchedPokemon.map((pokemon) => (
              <Link to={`/${pokemon.id}`} key={pokemon.id}>
                <Card pokemon={pokemon} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
