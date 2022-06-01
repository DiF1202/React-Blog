import { combineReducers } from "redux-immutable";
//头部组建的reducer
import { reducer as headerReducer } from "../../components/Header/store/index";
//Layout 布局组件的reducer
import { reducer as LayoutReducer } from "../../components/Layout/store";

export default combineReducers({
  header: headerReducer,
  layout: LayoutReducer,
});
