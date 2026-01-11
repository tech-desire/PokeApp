import React from "react";
import { HiSparkles } from "react-icons/hi2";
import "./pokemon.css";
const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="search-container">
        <div className="search-wrapper">
          <HiSparkles className="search-icon" />
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            className="search-input"
            value={search}
            placeholder="Search . ."
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Search;
