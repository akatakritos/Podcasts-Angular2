import {List} from 'immutable';

const initialState = List();

function setPodcasts(state, podcasts) {
    return state.merge(podcasts);
}

export default function podcasts(state = initialState, action) {
    switch(action.type) {
        case 'PODCASTS_SET': return setPodcasts(state, action.podcasts);
        default: return state;
    }
}
