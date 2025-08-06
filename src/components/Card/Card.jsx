import React from "react";
import UnknownPokemon from "/unknown.png";

import "./Card.css";
import { typeColors } from "../../utils/utils";

const Card = ({ pokemon }) => {
  const primaryType = pokemon.types?.[0]?.type?.name || "normal";
  const backgroundColor = typeColors[primaryType] || "#A8A878";
  return (
    <div className="pokemon-card" style={{ backgroundColor }}>
      <div className="pokemon-card-container">
        <div className="pc-left">
          <div className="pc-left-container">
            <div className="pc-name">
              <h1>{pokemon.name}</h1>
            </div>

            <div className="pc-id">
              <p>#00{pokemon.id}</p>
            </div>
          </div>

          <div className="pc-type">
            {pokemon.types.map((type, index) => (
              <p key={index}>{type.type.name}</p>
            ))}
          </div>
        </div>
        <div className="pc-right">
          <img
            src={
              pokemon.sprites.other.dream_world.front_default
                ? pokemon.sprites.other.dream_world.front_default
                : UnknownPokemon
            }
            alt={pokemon.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
