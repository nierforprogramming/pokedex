import React from "react";

import PokemonBall from "/pokemon-ball.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="nf-status-code">
        <div className="nf-content number-four">4</div>
        <div className="nf-content pokemon-ball">
          <img src={PokemonBall} alt="Not Found" />
        </div>
        <div className="nf-content number-four">4</div>
      </div>

      <div className="nf-message">
        <div className="nf-message-head">
          <h3>Uh-oh!</h3>
        </div>

        <div className="nf-message-para">
          <p>You look lost on your journey!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
