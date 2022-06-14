import request from "./index";

//获取友链数据
export function getFriendLinks() {
  return request({
    url: "/friends/allLink",
    params: {
      type: 1,
    },
  });
}
