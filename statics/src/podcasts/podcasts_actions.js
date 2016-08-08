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

function startDeleting(id) {
    return {
        type: 'PODCAST_DELETING',
        id
    }
}

function endDeleting(id) {
    return {
        type: 'PODCAST_DELETED',
        id
    }
}

function failedDeleting(id) {
    return {
        type: 'PODCAST_FAILEDDELETING',
        id
    }
}

export function deletePodcast(id) {
    return dispatch => {
        dispatch(startDeleting(id));

        return api.deletePodcast(id)
            .then(() => dispatch(endDeleting(id)))
            .catch(() => dispatch(failedDeleting(id)))
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