import { combineReducers } from 'redux';

import { FETCH_CHARACTERS_FULFILLED } from './actions';

const charactersReducer = (characters = [], action) => {
  switch (action.key) {
    case FETCH_CHARACTERS_FULFILLED:
      return action.payload.characters;
    default:
      return characters;
  }
};

export default combineReducers({
  characters: charactersReducer,
});
