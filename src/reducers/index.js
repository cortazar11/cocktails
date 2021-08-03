import {combineReducers} from 'redux';
import genreReducer from '../reducers/genreReducer';

export default combineReducers({
    genre : genreReducer
})