import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {createStore} from 'redux';
import {setPodcasts} from './podcasts/podcasts_actions';
require('bootstrap/dist/css/bootstrap.css');

const store = createStore(reducer);
store.dispatch(setPodcasts(
    [{id: 1, title: 'Test 1'},
    {id: 2, title: 'Test 2'},
    {id: 3, title: 'Test 3'},
    {id: 4, title: 'Test 4'}]));

console.log('state', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app')
);
