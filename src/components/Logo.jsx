import React from "react";

import pokemonLogoIcon from "/pokemon-logo-icon.png";

const Logo = ({ text }) => {
  return (
    <div className="logo">
      <img src={pokemonLogoIcon} alt="Pokemon Logo Icon" />
      <h1>{text}</h1>
    </div>
  );
};

export default Logo;
