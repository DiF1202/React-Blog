"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextByCurrentTime = getTextByCurrentTime;
exports.getPreviewImgUrl = getPreviewImgUrl;
exports.handleTimeStamp = void 0;

function getTextByCurrentTime(time) {
  var currentTime = time.substr(10, 10);

  if (currentTime.includes("上午")) {
    if (parseInt(currentTime.substr(2, 2)) <= 10) {
      return "早上好啊,今天打算卷什么?";
    } else {
      return "对自己要好一点,奖励自己一下,今天中午一定要吃点好的！";
    }
  } else {
    if (parseInt(currentTime.substr(2, 2)) <= 9) return "卷了一天了,我相信你一定会越来越强的!";else {
      return "这么晚了又偷看我的博客被逮住了吧,不许卷了~~";
    }
  }
}

function getPreviewImgUrl(url, _ref) {
  var w = _ref.w,
      _ref$q = _ref.q,
      q = _ref$q === void 0 ? 100 : _ref$q;

  if (w) {
    return url + "?imageView2/2/w/".concat(w, "/q/").concat(q);
  }

  return url + "?imageView2/q/".concat(q);
} //整理时间戳的函数


var handleTimeStamp = function handleTimeStamp(nS) {
  if (nS) {
    return new Date(parseInt(nS)).toLocaleString();
  }

  return "00/00/00";
};

exports.handleTimeStamp = handleTimeStamp;