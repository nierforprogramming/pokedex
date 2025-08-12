import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import NewsCard from "./NewsCard";
import Loader from "../Loader/Loader";

import "./NewsDetails.css";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  const { pokemonNews, loader, error } = useContext(PokemonContext);
  console.log(pokemonNews);
  return (
    <div className="pokemon-news">
      <div className="pn-container">
        <div className="pn-section-heading">
          <h1>Latest News</h1>
        </div>
        <div className="pn-news-cards">
          {pokemonNews?.news?.map((singlePokemonNews) => (
            <Link
              to={`/news/${singlePokemonNews.id}`}
              key={singlePokemonNews.title}
            >
              <NewsCard pokemonNews={singlePokemonNews} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
