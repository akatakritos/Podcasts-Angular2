import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {PodcastListing} from './PodcastListing';
import {connect} from 'react-redux';
import * as actionCreators from '../podcasts_actions';

const PodcastList = React.createClass({
    mixins: [PureRenderMixin],

    isDeleting: function(id) {
            return this.props.deleting == id;
    },

    render: function() {
        console.log('props', this.props);
        if (this.props.loading) {
            return ( <div>Loading...</div> );
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.podcasts.map(p =>
                        <PodcastListing title={p.get('title')} key={p.get('id')} deleting={this.isDeleting(p.get('id'))} delete={this.props.deletePodcast.bind(undefined, p.get('id'))} />
                    )}
                </tbody>
            </table>
        )
    }
});

function mapStateToProps(state) {
    return {
        podcasts: state.podcasts.get('podcasts'),
        loading: state.podcasts.get('loading'),
        deleting: state.podcasts.get('deleting')
    }
}

export const PodcastListContainer = connect(mapStateToProps, actionCreators)(PodcastList);