"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTime = getAllTime;

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//获取全部的时间线
function getAllTime() {
  return (0, _index["default"])("/timeline/get_all_time");
}