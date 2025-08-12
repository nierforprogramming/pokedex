import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import Logo from "../Logo";
import "./Navbar.css";

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
    const home = document.querySelector("#home");

    if (nav && home) {
      const navHeight = nav.offsetHeight;
      home.style.paddingTop = `${navHeight}px`;
    }
  }, []);

  return (
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <Logo text="Pokedex" />
        </div>
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
