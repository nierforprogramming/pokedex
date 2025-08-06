import React, { useContext } from "react";
import Logo from "../Logo";
import { FaSearch } from "react-icons/fa";

import "./Navbar.css";
import { PokemonContext } from "../../context/PokemonContext";

const Navbar = () => {
  const { search, setSearch } = useContext(PokemonContext);

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
              placeholder="Search Pokemon"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
