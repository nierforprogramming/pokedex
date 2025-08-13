import React, { useContext, useEffect, useState } from "react";

import "./EvolutionChain.css";
import { getEvolutionChainNames } from "../../services/api";
import { PokemonContext } from "../../context/PokemonContext";
import UnknownPokemon from "/unknown.png";
import { Link } from "react-router-dom";
import { typeColors } from "../../utils/utils";

const EvolutionChain = ({ pokemonId }) => {
  const { allPokemons } = useContext(PokemonContext);
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function _getEvolutionChainNames() {
      const names = await getEvolutionChainNames(pokemonId);

      // Find Evolved Pokemon
      const matched = allPokemons.filter((pokemon) =>
        names.includes(pokemon.name)
      );
      setEvolutions(matched);
    }
    _getEvolutionChainNames();
  }, [pokemonId, allPokemons]);

  const primaryType = evolutions[0]?.types[0]?.type?.name || "normal";
  const borderColor = typeColors[primaryType] || "#A8A878";

  return (
    <div className="evolution-chain">
      <div className="ec-container">
        <div className="ec-pokemons">
          {evolutions.length ? (
            evolutions.map((evo, index) => (
              <Link to={`/${evo.id}`} key={evo.id}>
                <div
                  className={`ec-pokemon ec-pokemon-${index}
                   `}
                  style={{
                    "--type-color":
                      typeColors[evolutions[0]?.types[0]?.type?.name] || "#000",
                  }}
                >
                  <div className="ec-pokemon-image">
                    {console.log(index)}
                    <img
                      src={
                        evo.sprites.other?.dream_world?.front_default ||
                        UnknownPokemon
                      }
                      alt=""
                    />
                  </div>
                  <div className="ec-pokemon-name">
                    <h3>{evo.name}</h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No evolution for this Pokemon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EvolutionChain;
