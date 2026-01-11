import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import "./pokemon.css";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Search from "./Search";

const Pokemon = () => {
  const LIMIT = 50;
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const API = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`;
  let fetchPokemon = async () => {
    try {
      setLoading(true);
      let res = await fetch(API);
      let data = await res.json();
      setTotalCount(data.count); // Total Pokémon in API
      const detailedData = data.results.map(async (curr) => {
        const res = await fetch(curr.url);
        const data = await res.json();
        return data;
      });
      const detailedResponse = await Promise.all(detailedData);
      setPokemon(detailedResponse);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const totalPages = Math.ceil(totalCount / LIMIT);
  const currentPage = offset / LIMIT + 1;

  if (loading) {
    return (
      <div className="waiting">
        <h1>
          Fetching Data
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </h1>
      </div>
    );
  } else if (error) {
    return (
      <div className="waiting">
        <h2>
          {error}
          <MdError className="Error-icon" />
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="heading">
        <img className="logo" src="logo.jpg" alt="" />
        <h2 className="title">PokeApp</h2>
      </div>

      {/* Search functionality Component  */}
      <Search search={search} setSearch={setSearch} />

      {/* Cards Component  */}
      <Cards search={search} pokemon={pokemon} />

      {/*prev and next  Buttons */}
      <Pagination
        offset={offset}
        currentPage={currentPage}
        totalPages={totalPages}
        totalCount={totalCount}
        LIMIT={LIMIT}
        setOffset={setOffset}
        search={search}
      />
    </div>
  );
};

export default Pokemon;
