import { combineReducers } from 'redux';

import { FETCH_CHARACTERS_FULFILLED } from './actions';

const charactersReducer = (characters = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_FULFILLED:
      return action.payload;
    default:
      return characters;
  }
};

export default combineReducers({
  characters: charactersReducer,
});
