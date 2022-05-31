import { combineReducers } from "redux-immutable";
//头部组建的reducer
import { reducer as headerReducer } from "../../components/Header/store/index";

export default combineReducers({
  header: headerReducer,
});
