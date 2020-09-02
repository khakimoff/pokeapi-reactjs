import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFilter } from "../../redux/actions/root";

function Top({ pokemons, setFilter, filter, page }) {
  let placeholder = pokemons.length < 1 ? "You need onload pokemons" : "Name";

  let disabled = pokemons.length < 1;

  return (
    <div>
      {page !== "pokemon" ? (
        <div className="list_top">
          <h1>Pokemon search</h1>
          <input
            disabled={disabled}
            placeholder={placeholder}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      ) : (
        <>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.mainReducer.pokemons,
  };
}

const Nav = connect(mapStateToProps, { setFilter })(Top);

export default Nav;
