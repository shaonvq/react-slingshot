import * as types from '../constants/actionTypes';
import {initialState} from './initialState';

export const incrementCountReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case types.INCREMENT_COUNT:
            return {count: state.count + action.count};
        default:
            return state;
    }
}