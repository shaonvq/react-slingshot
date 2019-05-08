import * as types from "../constants/actionTypes";
import { initialState } from "./initialState";

export const countReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return { count: state.count + action.count };
    case types.RESET_COUNT:
      return { count: 0 };
    default:
      return state;
  }
};
