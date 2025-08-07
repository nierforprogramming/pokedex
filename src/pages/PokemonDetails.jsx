import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { fetchSinglePokemon } from "../services/api";
import Loader from "../components/Loader/Loader";
import Card from "../components/Card/Card";
import "./PokemonDetails.css";
import { formatPokemonHeight, formatPokemonWeight } from "../utils/utils";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { loader, setLoader, selectedPokemon, setSelectedPokemon } =
    useContext(PokemonContext);
  const [selectedTabs, setSelectedTabs] = useState();
  console.log(selectedPokemon);

  useEffect(() => {
    async function _fetchSinglePokemon() {
      try {
        setLoader(true);
        const data = await fetchSinglePokemon(pokemonId);
        if (data) {
          setSelectedPokemon(data);
          setLoader(false);
        }
      } catch (err) {
        console.error("Error fetching Pokémon", err);
      }
    }

    _fetchSinglePokemon();
  }, [pokemonId, setSelectedPokemon]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="pk-details">
          <div className="pk-details-container">
            <Card pokemon={selectedPokemon} />
            <div className="pk-stats">
              <div className="pk-stats-container">
                <div className="pk-stats-head-container">
                  <div className="pk-stats-head">
                    <span id="info">Info</span>
                  </div>

                  <div className="pk-stats-head">
                    <span id="measurements">Measurements</span>
                  </div>

                  <div className="pk-stats-head">
                    <span id="base-stats">Base Stats</span>
                  </div>
                </div>

                <div className="pk-stats-content">
                  <div
                    className="detailtabs-content info-content"
                    id="info-content"
                  >
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint, laboriosam.
                    </p>
                  </div>

                  <div
                    className="detailtabs-content measurements-content"
                    id="measurements-content"
                  >
                    <div className="pk-stats-content-title">
                      <p className="title">Height</p>
                      <p>
                        {formatPokemonHeight(selectedPokemon?.height)} (
                        {(selectedPokemon?.height * 0.1).toFixed(2)} Metre)
                      </p>
                    </div>

                    <div className="pk-stats-content-title">
                      <p className="title">Weight</p>
                      <p>
                        {formatPokemonWeight(selectedPokemon?.weight)} (
                        {selectedPokemon?.weight * 0.1} Kilogram)
                      </p>
                    </div>

                    <div className="pk-stats-content-title">
                      <p className="title">Ability</p>
                      <p>
                        {selectedPokemon?.abilities?.length
                          ? selectedPokemon?.abilities
                              .map((ability) => ability?.ability?.name)
                              .join(", ")
                          : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div
                    className="detailtabs-content base-stats-content"
                    id="base-stats-content"
                  >
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint, laboriosam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
