import * as types from '../constants/actionTypes';

export const incrementCount = (count) => {
    return {
        type: types.INCREMENT_COUNT,
        count
    }
}