import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";
import { FaBook, FaHeart, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside>
      <div className="side-bar">
        <div className="sidebar-container">
          <div className="nav-link">
            <NavLink className="nav-link-container" to="/">
              <div className="side-bar-icon">
                <FaHome />
              </div>
              <div className="side-bar-text">
                <p>Home</p>
              </div>
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink className="nav-link-container" to="/favorites">
              <div className="side-bar-icon">
                <FaHeart />
              </div>
              <div className="side-bar-text">
                <p>Favorites</p>
              </div>
            </NavLink>
          </div>

          <div className="nav-link">
            <NavLink className="nav-link-container" to="/">
              <div className="side-bar-icon">
                <FaBook />
              </div>
              <div className="side-bar-text">
                <p>Types</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
