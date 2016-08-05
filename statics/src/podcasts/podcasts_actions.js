import { push } from 'react-router-redux';
import { fromJS } from 'immutable';

export function setPodcasts(podcasts) {
    return {
        type: 'PODCASTS_SET',
        podcasts
    };
}

function startSavePodcast() {
    return {
        type: 'PODCAST_START_SAVE'
    }
}

function endSavePodcast(podcast) {
    return {
        type: 'PODCAST_SAVED',
        podcast
    }
}

function post(url, podcast) {
    console.log('post', url, podcast);
    return new Promise(function(resolve, reject) {

        setTimeout(() => resolve(fromJS(podcast)), 1000);

    });
}

export function savePodcast(form) {
    return dispatch => {
        dispatch(startSavePodcast());

        return post('/api/podcats', form)
            .then(podcast => {
                console.log('then', podcast);
                dispatch(endSavePodcast(podcast));
                dispatch(push('/'));
            })
            .catch(() => {
                dispatch(endSavePodcast());
            })
    }
}