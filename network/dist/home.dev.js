"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeArticles = getHomeArticles;

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getHomeArticles(limit, page, tag_id) {
  if (tag_id === -1) {
    return (0, _index["default"])({
      url: "/article/get_articles",
      params: {
        limit: limit,
        page: page,
        type: 1
      }
    });
  } else {
    //调用另外一个接口get_articles_tag
    return (0, _index["default"])({
      url: "/article/get_articles_tag",
      params: {
        limit: limit,
        page: page,
        type: 1,
        tag_id: tag_id
      }
    });
  }
}