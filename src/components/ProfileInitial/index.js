import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDescription } from '../../redux/actions/pokemon';

// import preloader from "../../img/preloader.gif";

// components
import Types from '../Card/Types';

function ProfileInitial({ types, name, fetchDescription }) {
  const params = useParams();
  const id = parseInt(params.pokemonId);

  const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

  // Retrieve description on component mount
  useEffect(() => {
    fetchDescription(id);
  });

  return (
    <div>
      <div className="details_item--wrap">
        <div className="details_item">
          <img src={url} alt={url} />
        </div>
        <div className="details_item">
          <h3 className="details_item--title">Main characteristics</h3>
          <p>
            <b>Name - </b>
            {name}
          </p>
          <p>
            <b>ID - </b>
            {id}
          </p>
          <Types types={types} />
        </div>
        {/* <div className="details_item">
        {!description ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <p>
            <b>Description - </b>
            {description}
          </p>
        )}
      </div> */}
      </div>
    </div>
  );
}

function getPoke(state, curPokeId) {
  const { pokemons } = state.mainReducer;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
}

// Only selecting properties we need the current Pokemon
const mapStateToProps = (state) => {
  const curPokeId = state.mainReducer.currentPokemon;
  const pk = getPoke(state, curPokeId);

  const { description } = state.pokemonReducer;
  return {
    id: pk.id,
    types: pk.types,
    name: pk.name,
    description,
  };
};

const PokeIntro = connect(mapStateToProps, { fetchDescription })(
  ProfileInitial,
);

export default PokeIntro;
