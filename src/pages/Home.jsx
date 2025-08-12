import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import "./Home.css";
import NotFound from "../components/NotFound/NotFound";
import { fetchPokemonNews } from "../services/news/news";
import NewsCard from "../components/NewsCard/NewsCard";
import { Link } from "react-router-dom";
import Badge from "../components/Badge/Badge";

const Home = () => {
  const { loader, error, searchedPokemon, searching, pokemonNews } =
    useContext(PokemonContext);

  const category = [
    {
      text: "Pokedex",
      color: "teal",
    },

    {
      text: "Favourites",
      color: "hotpink",
    },

    {
      text: "Types",
      color: "purple",
    },
    {
      text: "News",
      color: "dodgerblue",
    },
  ];

  return (
    <section id="home">
      <div className="home-container">
        {searching ? (
          loader ? (
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
          )
        ) : (
          <div>
            <div className="category-menu">
              {category.map((badge, index) => (
                <Badge key={index} text={badge.text} bgColor={badge.color} />
              ))}
            </div>
            <div className="news-cards-wrapper">
              <div className="news-cards-sh">
                <h1>Pokémon News</h1>
              </div>
              <div className="news-cards">
                {pokemonNews?.news?.map((news) => (
                  <NewsCard key={news.id} pokemonNews={news} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
