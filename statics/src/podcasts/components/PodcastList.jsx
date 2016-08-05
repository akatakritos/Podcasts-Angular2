import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {PodcastListing} from './PodcastListing';
import {connect} from 'react-redux';

const PodcastList = React.createClass({
    mixins: [PureRenderMixin],

    render: function() {
        console.log('props', this.props);
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
                        <PodcastListing title={p.get('title')} key={p.get('id')}/>
                    )}
                </tbody>
            </table>
        )
    }
});

function mapStateToProps(state) {
    return {
        podcasts: state.podcasts.get('podcasts'),
        saving: state.podcasts.get('saving')
    }
}

export const PodcastListContainer = connect(mapStateToProps)(PodcastList);