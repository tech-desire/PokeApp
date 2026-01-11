import React from "react";
import "./pokemon.css";
import StarRating from "./StarRating";
import PokeType from "./PokeType";

/* 🔹 Calculate total power (Base Stat Total) */
const calculatePower = (pokemon) => {
  return pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);
};

/* 🔹 Convert power → 1–5 star rating */
const getPokemonRating = (power) => {
  if (power < 300) return 1;
  if (power < 400) return 2;
  if (power < 500) return 3;
  if (power < 600) return 4;
  return 5;
};


const Pokemon2 = ({ pokemon }) => {
  const power = calculatePower(pokemon);
  const rating = getPokemonRating(power);

  return (
    <div className="container">
      <div className="image-frame">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="details">
        {/* Name */}
        <div>
          <h3>{pokemon.name}</h3>
        </div>
        <PokeType pokemon={pokemon} />
        <StarRating rating={rating} />

        <p className="subdetails">Height: {pokemon.height}</p>
        <p className="subdetails">Weight: {pokemon.weight}</p>
        <p className="subdetails">Power: {power}</p>

        <p className="subdetails">Speed: {pokemon.stats[5].base_stat}</p>
        <p className="subdetails">Attack: {pokemon.stats[1].base_stat}</p>
        <p className="subdetails">
          Ability: {pokemon.abilities[0].ability.name}
        </p>
      </div>
    </div>
  );
};

export default Pokemon2;
