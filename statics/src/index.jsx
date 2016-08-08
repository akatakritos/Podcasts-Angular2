import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PodcastsIndexPage from './podcasts/components/PodcastsIndexPage';
import PodcastsNewPage from './podcasts/components/PodcastsNewPage';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {loadPodcasts} from './podcasts/podcasts_actions';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,hashHistory} from 'react-router';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
  }
});

const store = createStore(reducer,
    applyMiddleware(thunk, logger, routerMiddleware(hashHistory)));

store.dispatch(loadPodcasts());

const routes = (
    <Route component={App}>
        <Route path="/" component={PodcastsIndexPage} />
        <Route path="/podcasts/new" component={PodcastsNewPage} />
    </Route>
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);
