import React from "react";
import Logo from "../Logo";
import { FaSearch } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <Logo text="Pokemon" />
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
              placeholder="Search Pokemon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
