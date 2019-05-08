// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {incrementCountReducer} from './incrementCountReducer';

const rootReducer = combineReducers({
    incrementCountReducer,
});

export default rootReducer;