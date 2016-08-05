import React from 'react';
import { reduxForm } from 'redux-form';

const EditPodcastForm = React.createClass({

    render: function() {
        const { fields: { title, url, description}, handleSubmit } = this.props;

        return (
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" placeholder="Title" {...title} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" placeholder="Description" {...description} className="form-control" />
                </div>
                <div className="form-group">
                    <label>URL</label>
                    <input type="text" placeholder="URL" {...url} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
})

export default reduxForm({
    form: 'editPodcast',
    fields: ['title', 'url', 'description']
})(EditPodcastForm);