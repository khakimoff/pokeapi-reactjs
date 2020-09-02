import actionTypes from "../constants/action-types";

const initialState = {
  pokemons: [],
  filter: "",
  currentPokemon: null,
  loading: false,
  error: null,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.DATA_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DATA_LOADED:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        loading: false,
      };
    case actionTypes.API_ERROR:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    case actionTypes.SET_POKEMON:
      return { ...state, currentPokemon: action.payload };
    default:
      return state;
  }
}
