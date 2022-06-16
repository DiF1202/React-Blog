import request from "./index";

//根据分页获取
export function getHomeArticles(limit, page) {
  return request({
    url: "/article/get_articles",
    params: {
      limit,
      page,
      type: 1,
    },
  });
}

