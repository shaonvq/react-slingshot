// Set up your root reducer here...
import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
  countReducer
});

export default rootReducer;
