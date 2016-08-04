import React, { Component } from 'react';
import {fromJS} from 'immutable';
import {PodcastListContainer} from './podcasts/components/PodcastList';


class App extends Component {
  render() {
    return (
        <PodcastListContainer />
    );
  }
}

export default App;
