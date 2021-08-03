import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  , document.querySelector('#root'))

// API key
// https://api.themoviedb.org/3/movie/550?api_key=36945a4fb039de4d46e4043f0eddfed9
