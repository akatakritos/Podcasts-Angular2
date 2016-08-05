import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PodcastsIndexPage from './podcasts/components/PodcastsIndexPage';
import PodcastsNewPage from './podcasts/components/PodcastsNewPage';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {setPodcasts} from './podcasts/podcasts_actions';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,hashHistory} from 'react-router';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

const store = createStore(reducer,
    applyMiddleware(createLogger(), routerMiddleware(hashHistory), thunk));

store.dispatch(setPodcasts(
    fromJS([{id: 1, title: 'Test 1'},
    {id: 2, title: 'Test 2'},
    {id: 3, title: 'Test 3'},
    {id: 4, title: 'Test 4'}])));

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
