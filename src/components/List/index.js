import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { fetchAll } from '../../redux/actions/root';
import preloader from '../../img/preloader.gif';

// conmponents
import Card from '../Card';

function List({
  fetchAll, pokemons, loading, filter,
}) {
  const filteredPokemons = pokemons.filter((pk) => pk.name.includes(filter));

  return (
    <>
      <button onClick={fetchAll} className="list_top--button">
        Show Pokemon
      </button>
      <div>
        {loading ? (
          <div className="list_preloader">
            <img alt={preloader} src={preloader} />
            <p>Loading...</p>
          </div>
        ) : (
          ''
        )}
        <hr />
        <div>
          {filteredPokemons.map((pokemon) => (
            <Card key={shortid.generate()} pokemon={pokemon}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.mainReducer.pokemons,
    loading: state.mainReducer.loading,
    filter: state.mainReducer.filter,
  };
}

const actionCreators = { fetchAll };

export default connect(mapStateToProps, actionCreators)(List);
