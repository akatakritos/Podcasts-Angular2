import { List, Map } from 'immutable';

const initialState = Map({
    podcasts: List()
});

function setPodcasts(state, podcasts) {
    return state.set('podcasts', List(podcasts));
}

function startSavePodcast(state) {
    return state.set('saving', true);
}

function endSavePodcast(state, podcast) {
    state = state.remove('saving');
    if (podcast) {
        return state.update('podcasts', podcasts => podcasts.unshift(podcast));
    }

    return state;
}

function podcastsLoading(state) {
    return state.set('loading', true);
}

function podcastsLoaded(state) {
    return state.remove('loading');
}

function podcastDeleting(state, id) {
    return state.set('deleting', id);
}

function podcastDeleted(state, id) {
    return state.remove('deleting')
        .update('podcasts', l => l.filter(elem => elem.get('id') != id));
}

function podcastFailedDelete(state, id) {
    return state.remove('deleting').set('deleteFailed', id);
}

export default function podcasts(state = initialState, action) {
    switch(action.type) {
        case 'PODCASTS_SET': return setPodcasts(state, action.podcasts);
        case 'PODCAST_START_SAVE': return startSavePodcast(state);
        case 'PODCAST_SAVED': return endSavePodcast(state, action.podcast);
        case 'PODCASTS_LOADING': return podcastsLoading(state);
        case 'PODCASTS_LOADED': return podcastsLoaded(state);
        case 'PODCAST_DELETING': return podcastDeleting(state, action.id);
        case 'PODCAST_DELETED': return podcastDeleted(state, action.id);
        case 'PODCAST_FAILEDDELETING': return podcastFailedDelete(state, action.id);

        default: return state;
    }
}
