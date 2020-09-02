import React from "react";
import { connect } from "react-redux";
import { setPokemon } from "../redux/actions/root";
import { useParams, Redirect } from "react-router-dom";

//components
import Top from "../components/Top";
import ProfileInitial from "../components/ProfileInitial";
import ProfileMain from "../components/ProfileMain";
import ProfileStats from "../components/ProfileStats";

const Details = ({ pokemons, setPokemon }) => {
  let params = useParams();
  let pokemonId = parseInt(params.pokemonId);

  // Set current pokemon
  setPokemon(pokemonId);

  return (
    <>
      <Top page="pokemon" />
      <div>
        {pokemons.length < 1 ? (
          <Redirect to="/"></Redirect>
        ) : (
          <div className="details">
            <ProfileInitial />
            <ProfileMain />
            <ProfileStats />
          </div>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { pokemons: state.mainReducer.pokemons };
}

const Pokemon = connect(mapStateToProps, { setPokemon })(Details);

export default Pokemon;
