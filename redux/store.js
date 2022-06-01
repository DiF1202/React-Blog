import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducers/allReducers.js";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
