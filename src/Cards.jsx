import React from "react";
import Pokemon2 from "./Pokemon2";
const Cards = ({ search, pokemon }) => {
  return (
    <>
      <div className="main_container">
        <div className="subcontainer">
          {pokemon
            .filter((curr) => curr.name.includes(search))
            .map((curr) => {
              return <Pokemon2 key={curr.id} pokemon={curr} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Cards;
