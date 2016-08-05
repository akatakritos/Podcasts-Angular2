import React from 'react';
import { Link } from 'react-router';
import EditPodcastForm from './EditPodcastForm';
import * as actionCreators from '../podcasts_actions';
import {connect} from 'react-redux';

const PodcastsNewPage = React.createClass({

    render: function() {
        return (
            <div>
                <EditPodcastForm onSubmit={this.props.savePodcast} />
                <Link to="/" className="btn btn-default">Back</Link>
                { this.props.saving ? <span>Saving...</span> : null }
            </div>
        )
    }
})

function mapStateToProps(state) {
    return {
        saving: state.podcasts.get('saving')
    };
}

export default connect(mapStateToProps, actionCreators)(PodcastsNewPage);