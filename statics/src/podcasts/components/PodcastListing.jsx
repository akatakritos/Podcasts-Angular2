import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const PodcastListing = React.createClass({
    mixins: [PureRenderMixin],

    render: function() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td><button className='btn btn-danger'>Delete</button></td>
            </tr>
        )
    }
})

