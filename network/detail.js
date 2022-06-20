import request from "./index";

//获得一篇具体文章的接口请求
export function getArticleDetail(article_id) {
  return request({
    url: "/article/get_one_article",
    params: {
      article_id,
    },
  });
}

// 更新文章浏览量
export function changeArticleReadingCount(article_id) {
  return request({
    method: "post",
    url: "/article/updateViewCount",
    data: {
      article_id,
    },
  });
}
