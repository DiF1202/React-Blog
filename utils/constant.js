export function getHeaderRenderIndexByWidth(screenWidth) {
  if (screenWidth >= 1450) {
    return tabList.length;
  } else if (screenWidth < 1450 && screenWidth >= 1250) {
    return tabList.length - 1;
  } else if (screenWidth < 1250 && screenWidth >= 820) {
    return tabList.length - 2;
  } else {
    return 0;
  }
}

export const BlogTheme = {
  normal: {
    homeFontColor: "rgb(32,157,123)",
    HoverColor: "#1890FF",
    ThemeColor: "#55b59a",
    fontColor: "white",
  },
  darknormal: {
    homeFontColor: "#1890FF",
    HoverColor: "white",
    ThemeColor: "rgb(40,54,70)",
    fontColor: "#B4B9BE",
  },
};

export const BlogThemeKeys = {
  NORMAL: "normal",
  DARKNORMAL: "darknormal",
};

export const blogImgUrls = {
  qq: "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/qq.png?imageView2/1/w/100/q/80",
  wechat:
    "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/wechat.jpg?imageView2/1/w/100/q/80",
  avator1:
    "https://images.nowcoder.com/images/20220514/278870688_1652530572168/D6969C98BC2C0947BA4D4AA0CDF33902?x-oss-process=image/resize,m_mfit,h_100,w_100",
  avator2:
    "https://img1.baidu.com/it/u=2104458624,1305366899&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=500",
  wepay: "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/wepay.png",
  airpay:
    "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/airpay.png",
  comment:
    "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/comment.png",
  homeModalPic1:
    "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640959677473.JPEG2000?imageView2/1/q/70",
  homeModalPic2:
    "https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1640960246399.JPEG2000?imageView2/1/q/70",
};
