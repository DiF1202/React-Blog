"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleDetail = getArticleDetail;
exports.changeArticleReadingCount = changeArticleReadingCount;

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//获得一篇具体文章的接口请求
function getArticleDetail(article_id) {
  return (0, _index["default"])({
    url: "/article/get_one_article",
    params: {
      article_id: article_id
    }
  });
} // 更新文章浏览量


function changeArticleReadingCount(article_id) {
  return (0, _index["default"])({
    method: "post",
    url: "/article/updateViewCount",
    data: {
      article_id: article_id
    }
  });
}