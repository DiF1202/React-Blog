import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "./reducer/index.js";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
