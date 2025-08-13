import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { cleanNewsText } from "../../utils/utils";

import "./SingleNews.css";
const SingleNews = () => {
  const { pokemonNews } = useContext(PokemonContext);
  const [singleNewsData, setSingleNewsData] = useState(null);
  const { newsId } = useParams();

  useEffect(() => {
    if (pokemonNews?.news) {
      const foundNews = pokemonNews?.news.find(
        (news) => news.id === Number(newsId)
      );
      console.log(singleNewsData);

      setSingleNewsData(foundNews);
    }
  }, [newsId, pokemonNews]);
  return (
    <div className="single-news">
      <div className="single-news-container">
        {singleNewsData ? (
          <div>
            <div className="sn-title">
              <h1>{singleNewsData.title}</h1>
            </div>
            <div className="sn-date">
              <p>{singleNewsData.publish_date.slice(0, 11)}</p>
            </div>
            <div className="sn-author">
              <h3>{singleNewsData.author}</h3>
            </div>
            <div className="sn-image">
              <img src={singleNewsData.image} alt={singleNewsData.image} />
            </div>

            <div className="sn-summary">
              <p>{singleNewsData.summary}</p>
            </div>

            <div className="sn-text">
              <button>Read More</button>
            </div>
          </div>
        ) : (
          <p>No News</p>
        )}
      </div>
    </div>
  );
};

export default SingleNews;
