import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import Logo from "../Logo";
import "./Navbar.css";

const Navbar = () => {
  const { search, setSearch } = useContext(PokemonContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <Logo text="Pokédéx" />
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
