import { combineReducers } from 'redux-immutable';
//头部组建的reducer
import { reducer as headerReducer } from '../../components/Header/store/index';
//Layout 布局组件的reducer
import { reducer as LayoutReducer } from '../../components/Layout/store';
// 关于我界面的reducer
import { reducer as aboutReducer } from './about';
//右边栏 tags
import { reducer as rightReducer } from './rightbar';
//详情页
import { reducer as detailReducer } from './detail';
//左边抽屉
import { reducer as drawerReducer } from './drawer';
//互动中的评论
import { reducer as interactReducer } from './interact';

export default combineReducers({
  header: headerReducer,
  layout: LayoutReducer,
  about: aboutReducer,
  right: rightReducer,
  detail: detailReducer,
  drawer: drawerReducer,
  interact: interactReducer
});
