import React from "react";

import pokeBall from "/pokeball.png";
import "./Badge.css";
import { MdCatchingPokemon } from "react-icons/md";
const Badge = ({ text, bgColor }) => {
  return (
    <div className="badge">
      <div
        className="badge-container"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="badge-text">
          <p>{text}</p>
        </div>
        <div className="badge-image">
          <MdCatchingPokemon width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Badge;
