import { combineReducers } from "redux";

import { CollApsedReducer } from "./CollapsedReducer";
import { LoadingReducer } from "./LoadingReducer";

export default combineReducers({
  CollApsedReducer,
  LoadingReducer,
});
