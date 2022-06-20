"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reduxImmutable = require("redux-immutable");

var _index = require("../../components/Header/store/index");

var _store = require("../../components/Layout/store");

var _about = require("./about");

var _rightbar = require("./rightbar");

var _detail = require("./detail");

//头部组建的reducer
//Layout 布局组件的reducer
// 关于我界面的reducer
//右边栏 tags
//详情页
var _default = (0, _reduxImmutable.combineReducers)({
  header: _index.reducer,
  layout: _store.reducer,
  about: _about.reducer,
  right: _rightbar.reducer,
  detail: _detail.reducer
});

exports["default"] = _default;