import request from "./index";

//获取全部的时间线
export function getAllTime() {
  return request("/timeline/get_all_time");
}
