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
        return state.update('podcasts', podcasts => podcasts.push(podcast));
    }

    return state;
}

export default function podcasts(state = initialState, action) {
    switch(action.type) {
        case 'PODCASTS_SET': return setPodcasts(state, action.podcasts);
        case 'PODCAST_START_SAVE': return startSavePodcast(state);
        case 'PODCAST_SAVED': return endSavePodcast(state, action.podcast);
        default: return state;
    }
}
