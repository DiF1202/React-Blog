"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeaderRenderIndexByWidth = getHeaderRenderIndexByWidth;
exports.blogImgUrls = exports.BlogThemeKeys = exports.BlogTheme = void 0;

function getHeaderRenderIndexByWidth(screenWidth, tabList) {
  if (screenWidth >= 1450) {
    return tabList.length;
  } else if (screenWidth < 1450 && screenWidth >= 1250) {
    // return tabList.length - 1;
    return tabList.length;
  } else if (screenWidth < 1250 && screenWidth >= 820) {
    // return tabList.length - 2;
    return tabList.length;
  } else {
    return 0;
  }
}

var BlogTheme = {
  normal: {
    homeFontColor: "rgb(32,157,123)",
    HoverColor: "#1890FF",
    ThemeColor: "#55b59a",
    fontColor: "white"
  },
  darknormal: {
    homeFontColor: "#1890FF",
    HoverColor: "white",
    ThemeColor: "rgb(40,54,70)",
    fontColor: "#B4B9BE"
  }
};
exports.BlogTheme = BlogTheme;
var BlogThemeKeys = {
  NORMAL: "normal",
  DARKNORMAL: "darknormal"
};
exports.BlogThemeKeys = BlogThemeKeys;
var blogImgUrls = {
  qq: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/qq-v/qq.jpg?imageView2/1/w/100/q/80",
  wechat: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/qq-v/we.jpg?imageView2/1/w/100/q/80",
  avator1: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/QQ%E5%9B%BE%E7%89%8720220102015459.jpg?imageView2/1/w/100/q/80",
  avator2: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/Snipaste_2022-06-14_03-15-00.jpg?imageView2/1/w/100/q/80",
  wepay: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/qq-v/w1ePay.jpg",
  airpay: "https://difei-1305004956.cos.ap-shanghai.myqcloud.com/%E5%8D%9A%E5%AE%A2%E5%9B%BE%E5%BA%93/qq-v/zhifubao.jpg",
  comment: "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png",
  homeModalPic1: "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640959677473.JPEG2000?imageView2/1/q/70",
  homeModalPic2: "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640960246399.JPEG2000?imageView2/1/q/70"
};
exports.blogImgUrls = blogImgUrls;