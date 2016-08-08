import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const PodcastListing = React.createClass({
    mixins: [PureRenderMixin],

    render: function() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td><button className='btn btn-danger' disabled={this.props.deleting} onClick={this.props.delete}>Delete</button></td>
            </tr>
        )
    }
})

