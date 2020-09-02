import React from 'react';
import { connect } from 'react-redux';

const Profile = ({
  height, weight, base_exp, abilities, held_items,
}) => (
  <div>
    <div className="details_item">
      <h3>Other</h3>
      <p>
        <b>Height - </b>
        {height}
      </p>
      <p>
        <b>Weight - </b>
        {weight}
      </p>
      <p>
        <b>Base Experience - </b>
        {base_exp}
      </p>
      <p>
        <b>Abilities - </b>
        {abilities}
      </p>
      <p>
        <b>Held items - </b>
        {held_items}
      </p>
    </div>
  </div>
);

function getPoke(state, curPokeId) {
  const { pokemons } = state.mainReducer;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
}

function mapStateToProps(state) {
  const curPokeId = state.mainReducer.currentPokemon;
  const pk = getPoke(state, curPokeId);

  const abilities = pk.abilities.length
    ? pk.abilities.map((el) => el.ability.name).join(', ')
    : 'none';
  const held_items = pk.held_items.length
    ? pk.held_items.map((el) => el.item.name).join(', ')
    : 'none';
  return {
    height: pk.height,
    weight: pk.weight,
    base_exp: pk.base_experience,
    abilities,
    held_items,
  };
}

const PokeProfile = connect(mapStateToProps)(Profile);

export default PokeProfile;
