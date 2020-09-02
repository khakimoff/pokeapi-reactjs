import React from "react";
import { Link } from "react-router-dom";

//components
import Types from "./Types";

export default function Card({ pokemon }) {
  const { id, name, types } = pokemon;
  const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

  return (
    <Link to={`/${id}`}>
      <div className="list_card">
        <ul className="list_card--wrappTitle">
          <li>
            <h2>id - {id}</h2>
          </li>
          <li>
            <h2>Name - {name}</h2>
          </li>
        </ul>
        <div className="list_card--type">
          {types ? <Types types={types} /> : ""}
        </div>
        <img src={url} alt={url} />
      </div>
    </Link>
  );
}
