import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import Logo from "../Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { search, setSearch, setSearching, searching } =
    useContext(PokemonContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  };

  useEffect(() => {
    const nav = document.querySelector("header");
    const home = document.querySelector(".home-container");

    function updatePadding() {
      if (nav && home) {
        const navHeight = nav.offsetHeight;
        home.style.paddingTop = `${navHeight}px`;
      }
    }

    // Initial padding set on mount
    updatePadding();

    // Debounced resize handler
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        updatePadding();
      }, 10); // delay to allow layout to stabilize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header>
      <div className="nav-container">
        <Link to={"/"} className="nav-left">
          <Logo text="Pokedex" />
        </Link>

        <div className="nav-right">
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="search-input">
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              placeholder="Search Pokémon"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
