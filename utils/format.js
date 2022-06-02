export function getTextByCurrentTime(time) {
  const currentTime = time.substr(10, 10);
  if (currentTime.includes("上午")) {
    if (parseInt(currentTime.substr(2, 2)) <= 10) {
      return "早上好啊！昨晚有休息好吗？";
    } else {
      return "今天中午一定要吃的饱饱的！";
    }
  } else {
    if (parseInt(currentTime.substr(2, 2)) <= 9)
      return "累了一天了,我相信你一定会越来越强的!";
    else {
      return "如果太晚了,就看看电视,早点休息吧~~";
    }
  }
}

export function getPreviewImgUrl(url, { w, q = 100 }) {
  if (w) {
    return url + `?imageView2/2/w/${w}/q/${q}`;
  }
  return url + `?imageView2/q/${q}`;
}