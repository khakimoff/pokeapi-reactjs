import React from "react";
import { connect } from "react-redux";
import shortid from "shortid";

const ProfileStats = ({ stats }) => {
  return (
    <div>
      <div className="details_item">
        <h3>Stats</h3>
        <ul>
          {stats.map((stat) => (
            <li key={shortid.generate()}>
              <b>{stat.stat.name}-</b>
              {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function getPoke(state, curPokeId) {
  const pokemons = state.mainReducer.pokemons;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
}

function mapStateToProps(state) {
  const curPokeId = state.mainReducer.currentPokemon;
  const pk = getPoke(state, curPokeId);

  return {
    stats: pk.stats,
  };
}

const PokeStats = connect(mapStateToProps)(ProfileStats);

export default PokeStats;
