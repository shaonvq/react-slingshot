import * as types from "../constants/actionTypes";

export const incrementCount = count => {
  return {
    type: types.INCREMENT_COUNT,
    count
  };
};

export const resetCount = () => {
  return {
    type: types.RESET_COUNT
  };
};
