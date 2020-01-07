import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import Characters from './Characters';
import rootEpic from './fetch-character-epic';
import FetchCharacters from './FetchCharacters';
import reducer from './reducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const Application = () => {
  return (
    <div className="Application">
      <h1>Star Wars Autocomplete</h1>
      <FetchCharacters />
      <Characters />
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement,
);
