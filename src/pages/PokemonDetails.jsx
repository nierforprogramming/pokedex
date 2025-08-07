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

  const [selectedTab, setSelectedTab] = useState("info");
  const [animatedStats, setAnimatedStats] = useState([]);

  useEffect(() => {
    async function _fetchSinglePokemon() {
      try {
        setLoader(true);
        const data = await fetchSinglePokemon(pokemonId);
        if (data) {
          setSelectedPokemon(data);
        }
        setLoader(false);
      } catch (err) {
        console.error("Error fetching Pokémon", err);
        setLoader(false);
      }
    }

    _fetchSinglePokemon();
  }, [pokemonId, setLoader, setSelectedPokemon]);

  useEffect(() => {
    if (selectedTab === "base-stats" && selectedPokemon?.stats) {
      const timeout = setTimeout(() => {
        setAnimatedStats(selectedPokemon.stats);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedTab, selectedPokemon]);

  if (loader || !selectedPokemon) {
    return <Loader />;
  }

  return (
    <div className="pk-details">
      <div className="pk-details-container">
        <Card pokemon={selectedPokemon} />
        <div className="pk-stats">
          <div className="pk-stats-container">
            {/* Tab Selector */}
            <div className="pk-stats-head-container">
              {["info", "measurements", "base-stats"].map((tab) => (
                <div
                  key={tab}
                  className={`pk-stats-head ${
                    selectedTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="pk-stats-content">
              {selectedTab === "info" && (
                <div className="detailtabs-content info-content">
                  <p>
                    {selectedPokemon.name} is a Pokémon with base experience of{" "}
                    {selectedPokemon.base_experience} and{" "}
                    {selectedPokemon.types?.length || 0} type(s).
                  </p>
                </div>
              )}

              {selectedTab === "measurements" && (
                <div className="detailtabs-content measurements-content">
                  <div className="pk-stats-content-title">
                    <p className="title">Height</p>
                    <p>
                      {formatPokemonHeight(selectedPokemon.height)} (
                      {(selectedPokemon.height * 0.1).toFixed(2)} m)
                    </p>
                  </div>
                  <div className="pk-stats-content-title">
                    <p className="title">Weight</p>
                    <p>
                      {formatPokemonWeight(selectedPokemon.weight)} (
                      {(selectedPokemon.weight * 0.1).toFixed(2)} kg)
                    </p>
                  </div>
                  <div className="pk-stats-content-title">
                    <p className="title">Abilities</p>
                    <p>
                      {selectedPokemon.abilities
                        ?.map((ability) => ability.ability?.name)
                        .join(", ") || "N/A"}
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === "base-stats" && (
                <div className="detailtabs-content base-stats-content">
                  {selectedPokemon.stats?.map((stat, index) => {
                    const statName = stat.stat.name
                      .replace("special-attack", "Special Attack")
                      .replace("special-defense", "Special Defense")
                      .replace("attack", "Attack")
                      .replace("defense", "Defense")
                      .replace("speed", "Speed")
                      .replace("hp", "HP");

                    const width = animatedStats.length
                      ? `${(stat.base_stat / 255) * 100}%`
                      : "0%";

                    return (
                      <div className="stat-row" key={index}>
                        <p className="stat-name">{statName}</p>
                        <div className="stat-bar-wrapper">
                          <div
                            className={`stat-bar ${stat.stat.name}`}
                            style={{ width }}
                          ></div>
                        </div>
                        <p className="stat-value">{stat.base_stat}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
