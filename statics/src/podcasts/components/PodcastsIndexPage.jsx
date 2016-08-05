import React from 'react';
import { PodcastListContainer } from './PodcastList';
import PodcastNewButton from './PodcastNewButton';

const PodcastsPage = React.createClass({
    render: function() {
        return (
            <div>
                <PodcastNewButton />
                <PodcastListContainer />
            </div>
        )
    }
})

export default PodcastsPage;