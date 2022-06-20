"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSkills = getSkills;
exports.getAbout = getAbout;
exports.getPosition = getPosition;

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//获取技能点
function getSkills() {
  return (0, _index["default"])("/about/get_skills");
}

function getAbout() {
  return (0, _index["default"])("/about/aboutMe?type=1");
} // 获取ip


function getPosition() {
  return (0, _index["default"])("/user/get_position");
}