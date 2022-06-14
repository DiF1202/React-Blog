import { combineReducers } from "redux-immutable";
//头部组建的reducer
import { reducer as headerReducer } from "../../components/Header/store/index";
//Layout 布局组件的reducer
import { reducer as LayoutReducer } from "../../components/Layout/store";
// 关于我界面的reducer
import { reducer as aboutReducer } from "./about";

export default combineReducers({
  header: headerReducer,
  layout: LayoutReducer,
  about: aboutReducer,
});
