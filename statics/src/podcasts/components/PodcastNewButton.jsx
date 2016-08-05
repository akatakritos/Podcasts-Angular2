import React from 'react';
import { Link } from 'react-router';

const PodcastNewButton = React.createClass({

    render: function() {
        return (
            <div>
                <Link to="/podcasts/new" className="btn btn-primary">Create</Link>
            </div>
        )
    }
})

export default PodcastNewButton;