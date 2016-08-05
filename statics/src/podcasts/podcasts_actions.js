import { push } from 'react-router-redux';
import * as api from './podcast_api';

console.log(api);

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


export function savePodcast(form) {
    return dispatch => {
        dispatch(startSavePodcast());

        return api.savePodcast(form)
            .then(podcast => {
                dispatch(endSavePodcast(podcast));
                dispatch(push('/'));
            })
            .catch(() => {
                dispatch(endSavePodcast());
            })
    }
}

function loading() {
    return {
        type: 'PODCASTS_LOADING'
    }
}

function endLoading() {
    return {
        type: 'PODCASTS_LOADED'
    }
}

export function loadPodcasts() {
    return dispatch => {
        dispatch(loading());

        return api.getPodcasts()
            .then(podcasts => {
                dispatch(setPodcasts(podcasts));
                dispatch(endLoading())
            })
            .catch(() => dispatch(endLoading()));
    }
}