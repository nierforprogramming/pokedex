import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import NewsCard from "./NewsCard";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import "./NewsDetails.css";

const NewsDetails = () => {
  const {
    pokemonNews,
    loader,
    error,
    currentPage,
    setCurrentPage,
    itemsPerPage,
  } = useContext(PokemonContext);

  const totalNews = pokemonNews?.available || 0;
  const totalPages = Math.ceil(totalNews / itemsPerPage);
  const currentNews = pokemonNews?.news || [];

  const maxPageButtons = 5;

  // Calculate start and end page for pagination buttons
  const startPage =
    Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Boundary check
    setCurrentPage(page);
  };

  return (
    <div className="pokemon-news">
      <div className="pn-container">
        <div className="pn-section-heading">
          <h1>Latest News</h1>
        </div>

        <div className="pn-news-cards">
          {loader ? (
            <Loader />
          ) : error ? (
            <p>Error loading news.</p>
          ) : (
            currentNews.map((singlePokemonNews) => (
              <Link
                to={singlePokemonNews.url}
                key={singlePokemonNews.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard pokemonNews={singlePokemonNews} />
              </Link>
            ))
          )}
        </div>

        {/* Pagination Buttons */}
        <div className="pn-pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          ).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? "active-page" : ""}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
