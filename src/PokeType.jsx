import React from "react";
import "./pokemon.css";
const PokeType = ({ pokemon }) => {
  const typeColors = {
    fire: "#ef4444",
    water: "#3b82f6",
    grass: "#22c55e",
    electric: "#facc15",
    psychic: "#a855f7",
    ice: "#67e8f9",
    dragon: "#6366f1",
    dark: "#334155",
    fairy: "#f472b6",
    normal: "#9ca3af",
    fighting: "#dc2626",
    flying: "#60a5fa",
    poison: "#9333ea",
    ground: "#ca8a04",
    rock: "#78716c",
    bug: "#65a30d",
    ghost: "#7c3aed",
    steel: "#94a3b8",
  };

  const mainType = pokemon.types[0].type.name;
  const typeColor = typeColors[mainType] || "#6b7280"; 

  return (
    <>
      <p
        className="type"
        style={{
          backgroundColor: typeColor,
          color: "white",
        }}
      >
        {pokemon.types.map((t) => t.type.name).join(" - ")}
      </p>
    </>
  );
};

export default PokeType;
