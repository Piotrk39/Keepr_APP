import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import './index.css';

import { reducers } from './reducers';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <App tab="home"/>
  </Provider>
);
