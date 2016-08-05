import {combineReducers} from 'redux';
import podcasts from './podcasts/podcasts_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    podcasts,
    form: formReducer
});